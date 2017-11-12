'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Gets first element in array
var getFirstElement = function getFirstElement(arr) {
  return arr[0];
};

// Gets all but first element in array
var getAllButFirstElement = function getAllButFirstElement(arr) {
  return arr.slice(1);
};

// Gets last element in array
var getLastElement = function getLastElement(arr) {
  return arr[arr.length - 1];
};

// Gets all but the last element in array
var getAllButLastElement = function getAllButLastElement(arr) {
  return arr.slice(0, arr.length - 1);
};

// Gets middle elements in array
var getMiddleElements = function getMiddleElements(arr) {
  return arr.slice(1, arr.length - 1);
};

// Given an nArray, it filters out empty arrays
var filterOutEmptyArrays = function filterOutEmptyArrays(nArray) {
  return nArray.filter(function (arr) {
    return arr.length > 0;
  });
};

var flattenArray = function flattenArray(nArray) {
  return nArray.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, []);
};

// Get height of matrix
var getMatrixHeight$1 = function getMatrixHeight(mtx) {
  return mtx.length;
};

// Get width of matrix
var getMatrixWidth$1 = function getMatrixWidth(mtx) {
  return mtx.length > 0 ? mtx[0].length : 0;
};

// Get matrix width and height
// return {width, height} object
var getMatrixDimensions$1 = function getMatrixDimensions(mtx) {
  var height = getMatrixHeight$1(mtx);
  var width = getMatrixWidth$1(mtx);

  return { width: width, height: height };
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

















































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// Transpose a matrix
var transpose$1 = function transpose(mtx) {
  var width = getMatrixWidth$1(mtx);

  var leftCol = mtx.map(getFirstElement);

  if (width < 2) {
    return [leftCol];
  } else {
    var rightCols = mtx.map(getAllButFirstElement);
    return [leftCol].concat(toConsumableArray(transpose(rightCols)));
  }
};

// the empty matrix
var emptyMatrix = [[]];

// check if matrix is empty
var checkIfEmptyMatrix = function checkIfEmptyMatrix(mtx) {
  var isAnArray = Array.isArray(mtx);

  return !isAnArray ? false : mtx.length === 1 ? mtx[0].length === 0 : false;
};

// boolean product, passed to a reducer
var booleanProduct = function booleanProduct(acc, curr) {
  return Boolean(acc * curr);
};

// check if nArray is a matrix
var checkIfMatrix = function checkIfMatrix(nArray) {
  if (nArray.length === 0) {
    return true;
  }

  var checkIfArrays = nArray.map(function (d) {
    return Array.isArray(d);
  }).reduce(booleanProduct, true);

  if (checkIfArrays === false) {
    return false;
  }

  var firstRow = nArray[0];
  var height = nArray.length;
  var width = firstRow.length;

  if (height < 2) {
    return true;
  } else {
    return nArray.map(function (d) {
      return d.length === width;
    }).reduce(booleanProduct, true);
  }
};

// decorator to check if nArray is a matrix
var doMatrixCheck = function doMatrixCheck(fcn) {
  return function (nArray) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (checkIfMatrix(nArray) === false) {
      console.error("not a matrix");
      throw new Error();
    } else {
      return fcn.apply(undefined, [nArray].concat(args));
    }
  };
};

// A decorator for any matrix operation:
// * check if it's the identity
// * check if it's a matrix
// * apply a function
var matrixWrapper = function matrixWrapper(fcn) {
  return function (nArray) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (checkIfEmptyMatrix(nArray)) {
      return emptyMatrix;
    } else {
      return doMatrixCheck(fcn).apply(undefined, [nArray].concat(args));
    }
  };
};

// transform matrix to column space, do operation, transpose back
var doColumnOperation = function doColumnOperation(fcn) {
  return function (mtx) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return transpose$1(fcn.apply(undefined, [transpose$1(mtx)].concat(args)));
  };
};

var applyToEntries$1 = function applyToEntries(mtx) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return function (fcn) {
    return mtx.map(function (r) {
      return r.map(function (entry) {
        return fcn.apply(undefined, [entry].concat(args));
      });
    });
  };
};

var flipRows$1 = function flipRows(mtx) {
  return mtx.slice().reverse();
};

var flipCols$1 = doColumnOperation(flipRows$1);

// Slice rows from matrix
var sliceMatrixRows$1 = function sliceMatrixRows(mtx, startIndex, stopIndex) {
  if (stopIndex === undefined) {
    return mtx.slice(startIndex);
  } else {
    return mtx.slice(startIndex, stopIndex);
  }
};

// Get top row from matrix
var getTopRow$1 = function getTopRow(mtx) {
  return [getFirstElement(mtx)];
};

// Get all but top row from matrix
var getAllButTopRow$1 = function getAllButTopRow(mtx) {
  return getAllButFirstElement(mtx);
};

// Get bottom row from matrix
var getBottomRow$1 = function getBottomRow(mtx) {
  return [getLastElement(mtx)];
};

// Get all but bottom row from matrix
var getAllButBottomRow$1 = function getAllButBottomRow(mtx) {
  return getAllButLastElement(mtx);
};

// Get middle rows from matrix
var getMiddleRows$1 = function getMiddleRows(mtx) {
  return getMiddleElements(mtx);
};

// Slice columns from matrix
var sliceMatrixCols$1 = doColumnOperation(sliceMatrixRows$1);

// get left column from matrix
var getLeftCol$1 = doColumnOperation(getTopRow$1);

// get all but the left column from matrix
var getAllButLeftCol$1 = doColumnOperation(getAllButTopRow$1);

// get right column from matrix
var getRightCol$1 = doColumnOperation(getBottomRow$1);

// get all but right column from matrix
var getAllButRightCol$1 = doColumnOperation(getAllButBottomRow$1);

// get middle rows from matrix
var getMiddleCols$1 = doColumnOperation(getMiddleRows$1);

// Given a height and width, it returns the
// length of the kth diagonal
var lengthOfDiagonalFcn = function lengthOfDiagonalFcn(hgt, wid) {
  return function (k) {
    return Math.min(hgt, wid, wid - k, hgt + k);
  };
};

// return minor diagonals as an nArray
var getMinorDiagonals$1 = function getMinorDiagonals(matrix) {
  // get height and width of matrix
  var _getMatrixDimensions = getMatrixDimensions$1(matrix),
      width = _getMatrixDimensions.width,
      height = _getMatrixDimensions.height;

  // set up function to determine the length of a diagonal


  var getDiagonalLength = lengthOfDiagonalFcn(height, width);

  // start at the top-left diagonal--this has index 1 - height (a negative number),
  // the program increments until it hits width - 1
  var startIndex = 1 - height;
  var stopIndex = width - 1;

  // define a recursive function that will extract the diagonals
  var getDiagonals = function getDiagonals(nArray, index) {
    // get the length of the current diagonal
    var lengthOfDiagonal = getDiagonalLength(index);

    // the values on the diagonals have been shifted so they're
    // at the beginning of the top rows... get the top rows
    var topRows = nArray.slice(0, lengthOfDiagonal);

    // get the first values of the top rows
    // note: need to reverse to preserve left-to-right order
    var heads = topRows.map(function (row) {
      return row[0];
    }).reverse();

    // terminate if index reaches width - 1
    if (index === stopIndex) {
      // return value in bottom-right corner of original matrix
      return [heads];
    } else {
      // get tails of top rows
      var topTails = topRows.map(function (row) {
        return row.slice(1);
      });
      // get rows that we didn't extract from
      var botRows = nArray.slice(lengthOfDiagonal);
      // join tails and bottom rows
      // filter out empty arrays []
      var newMatrix = filterOutEmptyArrays([].concat(toConsumableArray(topTails), toConsumableArray(botRows)));

      // recursive step: call getDiagonals on reduced matrix, and
      // join with heads
      return [heads].concat(toConsumableArray(getDiagonals(newMatrix, index + 1)));
    }
  };

  // call getDiagonals from the starting index
  return getDiagonals(matrix, startIndex);
};

// Get major diagonals
// flip matrix on top row, then get the minor diagonals
var getMajorDiagonals$1 = function getMajorDiagonals(matrix) {
  return getMinorDiagonals$1(flipRows$1(matrix));
};

var formatOuterSpiral = function formatOuterSpiral(top, right, bottom, left) {
  var edgeArray = [].concat(toConsumableArray(top), toConsumableArray(right), [flattenArray(bottom).reverse(), flattenArray(left).reverse()]);

  return flattenArray(edgeArray).filter(function (d) {
    return d !== undefined;
  });
};

var getClockwiseSpiral$1 = function getClockwiseSpiral(matrix) {
  var _getMatrixDimensions = getMatrixDimensions$1(matrix),
      width = _getMatrixDimensions.width,
      height = _getMatrixDimensions.height;

  // terminal step if matrix is a row/column vector


  if (width < 2 || height < 2) {
    if (width === 0) {
      return [];
    } else {
      var termArr = height > width ? [].concat(toConsumableArray(getLeftCol$1(matrix))) : [].concat(toConsumableArray(getTopRow$1(matrix)));
      return flattenArray(termArr);
    }
  } else {
    // get top row
    var topRow = getTopRow$1(matrix);
    // get bottom row
    var botRow = getBottomRow$1(matrix);
    // get everything but top and bottom rows
    var middleMatrix = getMiddleRows$1(matrix);

    // get left column (minus top/bottom entries)
    var leftCol = getLeftCol$1(middleMatrix);
    // get right column (minus top/bottom entries)
    var rightCol = getRightCol$1(middleMatrix);

    // combine top, right, bottom, and left into an array
    var edgeArr = formatOuterSpiral(topRow, rightCol, botRow, leftCol);

    // get everything you didn't use
    var newMtx = getMiddleCols$1(middleMatrix);

    // append spiral array, then call again on the middle matrix
    var spiralArray = [edgeArr].concat(toConsumableArray(getClockwiseSpiral(newMtx)));

    // flatten the array once more
    return flattenArray(spiralArray);
  }
};

var getCounterClockwiseSpiral$1 = function getCounterClockwiseSpiral(matrix) {
  return getClockwiseSpiral$1(transpose$1(matrix));
};

var wrp = matrixWrapper;

var transpose$$1 = wrp(transpose$1);
var applyToEntries$$1 = wrp(applyToEntries$1);

var getMatrixWidth$$1 = wrp(getMatrixWidth$1);
var getMatrixHeight$$1 = wrp(getMatrixHeight$1);
var getMatrixDimensions$$1 = wrp(getMatrixDimensions$1);
var sliceMatrixRows$$1 = wrp(sliceMatrixRows$1);
var getTopRow$$1 = wrp(getTopRow$1);
var getAllButTopRow$$1 = wrp(getAllButTopRow$1);
var getBottomRow$$1 = wrp(getBottomRow$1);
var getAllButBottomRow$$1 = wrp(getAllButBottomRow$1);
var getMiddleRows$$1 = wrp(getMiddleRows$1);
var sliceMatrixCols$$1 = wrp(sliceMatrixCols$1);
var getLeftCol$$1 = wrp(getLeftCol$1);
var getAllButLeftCol$$1 = wrp(getAllButLeftCol$1);
var getRightCol$$1 = wrp(getAllButRightCol$1);
var getAllButRightCol$$1 = wrp(getAllButRightCol$1);
var getMiddleCols$$1 = wrp(getMiddleCols$1);

var flipRows$$1 = wrp(flipRows$1);
var flipCols$$1 = wrp(flipCols$1);

var getMinorDiagonals$$1 = wrp(getMinorDiagonals$1);
var getMajorDiagonals$$1 = wrp(getMajorDiagonals$1);

var getClockwiseSpiral$$1 = wrp(getClockwiseSpiral$1);
var getCounterClockwiseSpiral$$1 = wrp(getCounterClockwiseSpiral$1);

exports.doMatrixCheck = doMatrixCheck;
exports.matrixWrapper = matrixWrapper;
exports.doColumnOperation = doColumnOperation;
exports.transpose = transpose$$1;
exports.applyToEntries = applyToEntries$$1;
exports.getMatrixWidth = getMatrixWidth$$1;
exports.getMatrixHeight = getMatrixHeight$$1;
exports.getMatrixDimensions = getMatrixDimensions$$1;
exports.sliceMatrixRows = sliceMatrixRows$$1;
exports.getTopRow = getTopRow$$1;
exports.getAllButTopRow = getAllButTopRow$$1;
exports.getBottomRow = getBottomRow$$1;
exports.getAllButBottomRow = getAllButBottomRow$$1;
exports.getMiddleRows = getMiddleRows$$1;
exports.sliceMatrixCols = sliceMatrixCols$$1;
exports.getLeftCol = getLeftCol$$1;
exports.getAllButLeftCol = getAllButLeftCol$$1;
exports.getRightCol = getRightCol$$1;
exports.getAllButRightCol = getAllButRightCol$$1;
exports.getMiddleCols = getMiddleCols$$1;
exports.flipRows = flipRows$$1;
exports.flipCols = flipCols$$1;
exports.getMinorDiagonals = getMinorDiagonals$$1;
exports.getMajorDiagonals = getMajorDiagonals$$1;
exports.getClockwiseSpiral = getClockwiseSpiral$$1;
exports.getCounterClockwiseSpiral = getCounterClockwiseSpiral$$1;
exports.getFirstElement = getFirstElement;
exports.getAllButFirstElement = getAllButFirstElement;
exports.getLastElement = getLastElement;
exports.getAllButLastElement = getAllButLastElement;
exports.getMiddleElements = getMiddleElements;
exports.filterOutEmptyArrays = filterOutEmptyArrays;
exports.flattenArray = flattenArray;

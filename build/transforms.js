"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var util = require("./arrayUtils");
var mtx = require("./matrixUtils");

/**
|--------------------------------------------------
| Helpers
|--------------------------------------------------
*/

// Given a height and width, it returns the
// length of the kth diagonal
var lengthOfDiagonalFcn = function lengthOfDiagonalFcn(hgt, wid) {
  return function (k) {
    return Math.min(hgt, wid, wid - k, hgt + k);
  };
};

// Get outer edge of spiral in one array
var formatOuterSpiral = function formatOuterSpiral(top, right, bottom, left) {
  var edgeArray = [].concat(_toConsumableArray(top), _toConsumableArray(right), [util.flattenArray(bottom).reverse(), util.flattenArray(left).reverse()]);

  return util.flattenArray(edgeArray).filter(function (d) {
    return d !== undefined;
  });
};

// Do operation on columns
var doColOperation = mtx.doColOperation;

// matrix check decorator
var check = mtx.doMatrixOp;

// matrix check then flatten decorator
// used for spiral function
var checkThenFlatten = function checkThenFlatten(fcn) {
  return function (nArray) {
    return util.flattenArray(check(fcn)(nArray));
  };
};

/**
|--------------------------------------------------
| Diagonals
|--------------------------------------------------
*/
var getMinorDiagonals = function getMinorDiagonals(matrix) {
  // get height and width of matrix
  var _mtx$getMatrixDimensi = mtx.getMatrixDimensions(matrix),
      width = _mtx$getMatrixDimensi.width,
      height = _mtx$getMatrixDimensi.height;

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
      var newMatrix = util.filterOutEmptyArrays([].concat(_toConsumableArray(topTails), _toConsumableArray(botRows)));

      // recursive step: call getDiagonals on reduced matrix, and
      // join with heads
      return [heads].concat(_toConsumableArray(getDiagonals(newMatrix, index + 1)));
    }
  };

  // call getDiagonals from the starting index
  return getDiagonals(matrix, startIndex);
};

// Get major diagonals
// flip matrix on top row, then get the minor diagonals
var getMajorDiagonals = function getMajorDiagonals(matrix) {
  return getMinorDiagonals(flipOnRow(matrix, 0));
};

/**
|--------------------------------------------------
| Row Swapping
|--------------------------------------------------
*/

// flip the nArray on the given row index
// TODO consider using permutation groups/matrix operations
var flipOnRow = function flipOnRow(matrix, rowIndex) {
  var top = mtx.sliceMatrixRows(matrix, 0, rowIndex);
  var middle = [matrix[rowIndex]];
  var bottom = mtx.sliceMatrixRows(matrix, rowIndex + 1);

  var _map = [top, middle, bottom].map(function (d) {
    return d.reverse();
  }),
      _map2 = _slicedToArray(_map, 3),
      newBot = _map2[0],
      newMid = _map2[1],
      newTop = _map2[2];

  return [].concat(_toConsumableArray(newTop), _toConsumableArray(newMid), _toConsumableArray(newBot));
};

var flipOnCol = doColOperation(flipOnRow);

/**
|--------------------------------------------------
| Spiral
|--------------------------------------------------
*/

// get clockwise spiral of matrix
// TODO
// * better logic for terminal step... perhaps checkIfRowVector?
// * too many flatten statements... can I fix that?
var getClockwiseSpiral = function getClockwiseSpiral(matrix) {
  var _mtx$getMatrixDimensi2 = mtx.getMatrixDimensions(matrix),
      width = _mtx$getMatrixDimensi2.width,
      height = _mtx$getMatrixDimensi2.height;

  // terminal step if matrix is a row/column vector


  if (width < 2 || height < 2) {
    if (width === 0) {
      return [];
    } else {
      return height > width ? [].concat(_toConsumableArray(mtx.getLeftCol(matrix))) : [].concat(_toConsumableArray(mtx.getTopRow(matrix)));
    }
  } else {
    // get top row
    var topRow = mtx.getTopRow(matrix);
    // get bottom row
    var botRow = mtx.getBottomRow(matrix);
    // get everything but top and bottom rows
    var middleMatrix = mtx.getMiddleRows(matrix);

    // get left column (minus top/bottom entries)
    var leftCol = mtx.getLeftCol(middleMatrix);
    // get right column (minus top/bottom entries)
    var rightCol = mtx.getRightCol(middleMatrix);

    // combine top, right, bottom, and left into an array
    var edgeArr = formatOuterSpiral(topRow, rightCol, botRow, leftCol);

    // get everything you didn't use
    var newMtx = mtx.getMiddleCols(middleMatrix);

    // append spiral array, then call again on the middle matrix
    var spiralArray = [edgeArr].concat(_toConsumableArray(getClockwiseSpiral(newMtx)));

    // flatten the array once more
    return util.flattenArray(spiralArray);
  }
};

var getCounterClockwiseSpiral = function getCounterClockwiseSpiral(matrix) {
  return getClockwiseSpiral(mtx.transpose(matrix));
};

module.exports = {
  getMinorDiagonals: check(getMinorDiagonals),
  getMajorDiagonals: check(getMajorDiagonals),
  flipOnRow: check(flipOnRow),
  flipOnCol: check(flipOnCol),
  getClockwiseSpiral: checkThenFlatten(getClockwiseSpiral),
  getCounterClockwiseSpiral: checkThenFlatten(getCounterClockwiseSpiral)
};
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var util = require("./arrayUtils");

// empty matrix
var emptyMatrix = [[]];

// check if matrix is empty
var checkIfEmpty = function checkIfEmpty(mtx) {
  var isAnArray = Array.isArray(mtx);

  return !isAnArray ? false : mtx.length === 1 ? mtx[0].length === 0 : false;
};

// check if nArray is a matrix
var checkIfMatrix = function checkIfMatrix(nArray) {
  if (nArray.length === 0) {
    return true;
  }

  var product = function product(acc, elmt) {
    return Boolean(acc * elmt);
  };

  var checkIfArrays = nArray.map(function (d) {
    return Array.isArray(d);
  }).reduce(product, true);

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
    }).reduce(product, true);
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
// TODO think of other logic for this
var doMatrixOp = function doMatrixOp(fcn) {
  return function (nArray) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (checkIfEmpty(nArray)) {
      return emptyMatrix;
    } else {
      return doMatrixCheck(fcn).apply(undefined, [nArray].concat(args));
    }
  };
};

// Get height of matrix
var getMatrixHeight = function getMatrixHeight(mtx) {
  return mtx.length;
};

// Get width of matrix
var getMatrixWidth = function getMatrixWidth(mtx) {
  return mtx.length > 0 ? mtx[0].length : 0;
};

// Get matrix width and height
var getMatrixDimensions = function getMatrixDimensions(mtx) {
  var height = getMatrixHeight(mtx);
  var width = getMatrixWidth(mtx);

  return { width: width, height: height };
};

// Slice rows from Matrix
var sliceMatrixRows = function sliceMatrixRows(mtx, startIndex, stopIndex) {
  if (stopIndex === undefined) {
    return mtx.slice(startIndex);
  } else {
    return mtx.slice(startIndex, stopIndex);
  }
};

// Get top row from Matrix
var getTopRow = function getTopRow(mtx) {
  return [util.getFirstElmt(mtx)];
};

// Get all but top row from matrix
var getAllButTopRow = function getAllButTopRow(mtx) {
  return util.getAllButFirstElmt(mtx);
};

// Get bottom row from matrix
var getBottomRow = function getBottomRow(mtx) {
  return [util.getLastElmt(mtx)];
};

// Get all but bottom row from matrix
var getAllButBottomRow = function getAllButBottomRow(mtx) {
  return util.getAllButLastElmt(mtx);
};

// Get middle rows from matrix
var getMiddleRows = function getMiddleRows(mtx) {
  return util.getMiddleElmts(mtx);
};

// Transpose a matrix
var transpose = function transpose(mtx) {
  var width = getMatrixWidth(mtx);

  var leftCol = mtx.map(util.getFirstElmt);

  if (width < 2) {
    return [leftCol];
  } else {
    var rightCols = mtx.map(util.getAllButFirstElmt);
    return [leftCol].concat(_toConsumableArray(transpose(rightCols)));
  }
};

// Decorator for column operations
// transform matrix to row space, do operation, transpose back
var doColOperation = function doColOperation(fcn) {
  return function (mtx) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return transpose(fcn.apply(undefined, [transpose(mtx)].concat(args)));
  };
};

// Decorator for column operations with matrix checking
var colOpMatrixCheck = function colOpMatrixCheck(fcn) {
  return function (nArray) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return doMatrixOp(doColOperation(fcn)).apply(undefined, [nArray].concat(args));
  };
};

module.exports = {
  emptyMatrix: emptyMatrix,
  checkIfEmpty: checkIfEmpty,
  checkIfMatrix: checkIfMatrix,
  doMatrixOp: doMatrixOp,
  doColOperation: doColOperation,
  getMatrixHeight: doMatrixCheck(getMatrixHeight),
  getMatrixWidth: doMatrixCheck(getMatrixWidth),
  getMatrixDimensions: doMatrixCheck(getMatrixDimensions),
  transpose: doMatrixOp(transpose),
  sliceMatrixRows: doMatrixOp(sliceMatrixRows),
  sliceMatrixCols: doColOperation(sliceMatrixRows),
  getTopRow: doMatrixOp(getTopRow),
  getBottomRow: doMatrixOp(getBottomRow),
  getAllButTopRow: doMatrixOp(getAllButTopRow),
  getAllButBottomRow: doMatrixOp(getAllButBottomRow),
  getMiddleRows: doMatrixOp(getMiddleRows),
  getLeftCol: colOpMatrixCheck(getTopRow),
  getAllButLeftCol: colOpMatrixCheck(getAllButTopRow),
  getRightCol: colOpMatrixCheck(getBottomRow),
  getAllButRightCol: colOpMatrixCheck(getAllButBottomRow),
  getMiddleCols: colOpMatrixCheck(getMiddleRows)
};
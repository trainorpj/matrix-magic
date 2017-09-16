"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doColumnOperation = exports.matrixWrapper = exports.doMatrixCheck = undefined;

var _transpose = require("./transpose");

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
var doMatrixCheck = exports.doMatrixCheck = function doMatrixCheck(fcn) {
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
var matrixWrapper = exports.matrixWrapper = function matrixWrapper(fcn) {
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
var doColumnOperation = exports.doColumnOperation = function doColumnOperation(fcn) {
  return function (mtx) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return (0, _transpose.transpose)(fcn.apply(undefined, [(0, _transpose.transpose)(mtx)].concat(args)));
  };
};
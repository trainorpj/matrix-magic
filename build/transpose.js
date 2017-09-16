"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpose = undefined;

var _arrayUtils = require("./arrayUtils");

var _matrixDimensions = require("./matrixDimensions");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Transpose a matrix
var transpose = exports.transpose = function transpose(mtx) {
  var width = (0, _matrixDimensions.getMatrixWidth)(mtx);

  var leftCol = mtx.map(_arrayUtils.getFirstElement);

  if (width < 2) {
    return [leftCol];
  } else {
    var rightCols = mtx.map(_arrayUtils.getAllButFirstElement);
    return [leftCol].concat(_toConsumableArray(transpose(rightCols)));
  }
};
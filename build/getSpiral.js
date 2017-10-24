"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCounterClockwiseSpiral = exports.getClockwiseSpiral = undefined;

var _transpose = require("./transpose");

var _arrayUtils = require("./arrayUtils");

var _matrixDimensions = require("./matrixDimensions");

var _matrixSlice = require("./matrixSlice");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var formatOuterSpiral = function formatOuterSpiral(top, right, bottom, left) {
  var edgeArray = [].concat(_toConsumableArray(top), _toConsumableArray(right), [(0, _arrayUtils.flattenArray)(bottom).reverse(), (0, _arrayUtils.flattenArray)(left).reverse()]);

  return (0, _arrayUtils.flattenArray)(edgeArray).filter(function (d) {
    return d !== undefined;
  });
};

var getClockwiseSpiral = exports.getClockwiseSpiral = function getClockwiseSpiral(matrix) {
  var _getMatrixDimensions = (0, _matrixDimensions.getMatrixDimensions)(matrix),
      width = _getMatrixDimensions.width,
      height = _getMatrixDimensions.height;

  // terminal step if matrix is a row/column vector


  if (width < 2 || height < 2) {
    if (width === 0) {
      return [];
    } else {
      var termArr = height > width ? [].concat(_toConsumableArray((0, _matrixSlice.getLeftCol)(matrix))) : [].concat(_toConsumableArray((0, _matrixSlice.getTopRow)(matrix)));
      return (0, _arrayUtils.flattenArray)(termArr);
    }
  } else {
    // get top row
    var topRow = (0, _matrixSlice.getTopRow)(matrix);
    // get bottom row
    var botRow = (0, _matrixSlice.getBottomRow)(matrix);
    // get everything but top and bottom rows
    var middleMatrix = (0, _matrixSlice.getMiddleRows)(matrix);

    // get left column (minus top/bottom entries)
    var leftCol = (0, _matrixSlice.getLeftCol)(middleMatrix);
    // get right column (minus top/bottom entries)
    var rightCol = (0, _matrixSlice.getRightCol)(middleMatrix);

    // combine top, right, bottom, and left into an array
    var edgeArr = formatOuterSpiral(topRow, rightCol, botRow, leftCol);

    // get everything you didn't use
    var newMtx = (0, _matrixSlice.getMiddleCols)(middleMatrix);

    // append spiral array, then call again on the middle matrix
    var spiralArray = [edgeArr].concat(_toConsumableArray(getClockwiseSpiral(newMtx)));

    // flatten the array once more
    return (0, _arrayUtils.flattenArray)(spiralArray);
  }
};

var getCounterClockwiseSpiral = exports.getCounterClockwiseSpiral = function getCounterClockwiseSpiral(matrix) {
  return getClockwiseSpiral((0, _transpose.transpose)(matrix));
};
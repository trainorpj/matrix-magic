"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMajorDiagonals = exports.getMinorDiagonals = undefined;

var _matrixDimensions = require("./matrixDimensions");

var _matrixDecorators = require("./matrixDecorators");

var _matrixShift = require("./matrixShift");

var _arrayUtils = require("./arrayUtils");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Given a height and width, it returns the
// length of the kth diagonal
var lengthOfDiagonalFcn = function lengthOfDiagonalFcn(hgt, wid) {
  return function (k) {
    return Math.min(hgt, wid, wid - k, hgt + k);
  };
};

// return minor diagonals as an nArray
var getMinorDiagonals = exports.getMinorDiagonals = function getMinorDiagonals(matrix) {
  // get height and width of matrix
  var _getMatrixDimensions = (0, _matrixDimensions.getMatrixDimensions)(matrix),
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
      var newMatrix = (0, _arrayUtils.filterOutEmptyArrays)([].concat(_toConsumableArray(topTails), _toConsumableArray(botRows)));

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
var getMajorDiagonals = exports.getMajorDiagonals = function getMajorDiagonals(matrix) {
  return getMinorDiagonals((0, _matrixShift.flipRows)(matrix));
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMiddleCols = exports.getAllButRightCol = exports.getRightCol = exports.getAllButLeftCol = exports.getLeftCol = exports.sliceMatrixCols = exports.getMiddleRows = exports.getAllButBottomRow = exports.getBottomRow = exports.getAllButTopRow = exports.getTopRow = exports.sliceMatrixRows = undefined;

var _arrayUtils = require("./arrayUtils");

var _matrixDecorators = require("./matrixDecorators");

// Slice rows from matrix
var sliceMatrixRows = exports.sliceMatrixRows = function sliceMatrixRows(mtx, startIndex, stopIndex) {
  if (stopIndex === undefined) {
    return mtx.slice(startIndex);
  } else {
    return mtx.slice(startIndex, stopIndex);
  }
};

// Get top row from matrix
var getTopRow = exports.getTopRow = function getTopRow(mtx) {
  return [(0, _arrayUtils.getFirstElement)(mtx)];
};

// Get all but top row from matrix
var getAllButTopRow = exports.getAllButTopRow = function getAllButTopRow(mtx) {
  return (0, _arrayUtils.getAllButFirstElement)(mtx);
};

// Get bottom row from matrix
var getBottomRow = exports.getBottomRow = function getBottomRow(mtx) {
  return [(0, _arrayUtils.getLastElement)(mtx)];
};

// Get all but bottom row from matrix
var getAllButBottomRow = exports.getAllButBottomRow = function getAllButBottomRow(mtx) {
  return (0, _arrayUtils.getAllButLastElement)(mtx);
};

// Get middle rows from matrix
var getMiddleRows = exports.getMiddleRows = function getMiddleRows(mtx) {
  return (0, _arrayUtils.getMiddleElements)(mtx);
};

// Slice columns from matrix
var sliceMatrixCols = exports.sliceMatrixCols = (0, _matrixDecorators.doColumnOperation)(sliceMatrixRows);

// get left column from matrix
var getLeftCol = exports.getLeftCol = (0, _matrixDecorators.doColumnOperation)(getTopRow);

// get all but the left column from matrix
var getAllButLeftCol = exports.getAllButLeftCol = (0, _matrixDecorators.doColumnOperation)(getAllButTopRow);

// get right column from matrix
var getRightCol = exports.getRightCol = (0, _matrixDecorators.doColumnOperation)(getBottomRow);

// get all but right column from matrix
var getAllButRightCol = exports.getAllButRightCol = (0, _matrixDecorators.doColumnOperation)(getAllButBottomRow);

// get middle rows from matrix
var getMiddleCols = exports.getMiddleCols = (0, _matrixDecorators.doColumnOperation)(getMiddleRows);
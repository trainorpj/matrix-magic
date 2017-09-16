"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCounterClockwiseSpiral = exports.getClockwiseSpiral = exports.getMajorDiagonals = exports.getMinorDiagonals = exports.flipCols = exports.flipRows = exports.getMiddleCols = exports.getAllButRightCol = exports.getRightCol = exports.getAllButLeftCol = exports.getLeftCol = exports.sliceMatrixCols = exports.getMiddleRows = exports.getAllButBottomRow = exports.getBottomRow = exports.getAllButTopRow = exports.getTopRow = exports.sliceMatrixRows = exports.getMatrixDimensions = exports.getMatrixHeight = exports.getMatrixWidth = exports.transpose = exports.doColumnOperation = exports.matrixWrapper = exports.doMatrixCheck = exports.flattenArray = exports.filterOutEmptyArrays = exports.getMiddleElements = exports.getAllButLastElement = exports.getLastElement = exports.getAllButFirstElement = exports.getFirstElement = undefined;

var _arrayUtils = require("./arrayUtils");

Object.defineProperty(exports, "getFirstElement", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.getFirstElement;
  }
});
Object.defineProperty(exports, "getAllButFirstElement", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.getAllButFirstElement;
  }
});
Object.defineProperty(exports, "getLastElement", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.getLastElement;
  }
});
Object.defineProperty(exports, "getAllButLastElement", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.getAllButLastElement;
  }
});
Object.defineProperty(exports, "getMiddleElements", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.getMiddleElements;
  }
});
Object.defineProperty(exports, "filterOutEmptyArrays", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.filterOutEmptyArrays;
  }
});
Object.defineProperty(exports, "flattenArray", {
  enumerable: true,
  get: function get() {
    return _arrayUtils.flattenArray;
  }
});

var _transpose = require("./transpose");

var _matrixDecorators = require("./matrixDecorators");

var _matrixDimensions = require("./matrixDimensions");

var _matrixShift = require("./matrixShift");

var _matrixSlice = require("./matrixSlice");

var _getDiagonals = require("./getDiagonals");

var _getSpiral = require("./getSpiral");

exports.doMatrixCheck = _matrixDecorators.doMatrixCheck;
exports.matrixWrapper = _matrixDecorators.matrixWrapper;
exports.doColumnOperation = _matrixDecorators.doColumnOperation;


var wrp = _matrixDecorators.matrixWrapper;

var transpose = exports.transpose = wrp(_transpose.transpose);

var getMatrixWidth = exports.getMatrixWidth = wrp(_matrixDimensions.getMatrixWidth);
var getMatrixHeight = exports.getMatrixHeight = wrp(_matrixDimensions.getMatrixHeight);
var getMatrixDimensions = exports.getMatrixDimensions = wrp(_matrixDimensions.getMatrixDimensions);
var sliceMatrixRows = exports.sliceMatrixRows = wrp(_matrixSlice.sliceMatrixRows);
var getTopRow = exports.getTopRow = wrp(_matrixSlice.getTopRow);
var getAllButTopRow = exports.getAllButTopRow = wrp(_matrixSlice.getAllButTopRow);
var getBottomRow = exports.getBottomRow = wrp(_matrixSlice.getBottomRow);
var getAllButBottomRow = exports.getAllButBottomRow = wrp(_matrixSlice.getAllButBottomRow);
var getMiddleRows = exports.getMiddleRows = wrp(_matrixSlice.getMiddleRows);
var sliceMatrixCols = exports.sliceMatrixCols = wrp(_matrixSlice.sliceMatrixCols);
var getLeftCol = exports.getLeftCol = wrp(_matrixSlice.getLeftCol);
var getAllButLeftCol = exports.getAllButLeftCol = wrp(_matrixSlice.getAllButLeftCol);
var getRightCol = exports.getRightCol = wrp(_matrixSlice.getAllButRightCol);
var getAllButRightCol = exports.getAllButRightCol = wrp(_matrixSlice.getAllButRightCol);
var getMiddleCols = exports.getMiddleCols = wrp(_matrixSlice.getMiddleCols);

var flipRows = exports.flipRows = wrp(_matrixShift.flipRows);
var flipCols = exports.flipCols = wrp(_matrixShift.flipCols);

var getMinorDiagonals = exports.getMinorDiagonals = wrp(_getDiagonals.getMinorDiagonals);
var getMajorDiagonals = exports.getMajorDiagonals = wrp(_getDiagonals.getMajorDiagonals);

var getClockwiseSpiral = exports.getClockwiseSpiral = wrp(_getSpiral.getClockwiseSpiral);
var getCounterClockwiseSpiral = exports.getCounterClockwiseSpiral = wrp(_getSpiral.getCounterClockwiseSpiral);
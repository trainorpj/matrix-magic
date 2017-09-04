"use strict";

var _require = require("./arrayUtils"),
    getFirstElmt = _require.getFirstElmt,
    getAllButFirstElmt = _require.getAllButFirstElmt,
    getLastElmt = _require.getLastElmt,
    getAllButLastElmt = _require.getAllButLastElmt,
    getMiddleElmts = _require.getMiddleElmts,
    filterOutEmptyArrays = _require.filterOutEmptyArrays,
    flattenArray = _require.flattenArray;

var _require2 = require("./matrixUtils"),
    emptyMatrix = _require2.emptyMatrix,
    checkIfEmpty = _require2.checkIfEmpty,
    checkIfMatrix = _require2.checkIfMatrix,
    doMatrixOp = _require2.doMatrixOp,
    doColOperation = _require2.doColOperation,
    getMatrixHeight = _require2.getMatrixHeight,
    getMatrixWidth = _require2.getMatrixWidth,
    getMatrixDimensions = _require2.getMatrixDimensions,
    checkIfRowVector = _require2.checkIfRowVector,
    checkIfColVector = _require2.checkIfColVector,
    checkIfVector = _require2.checkIfVector,
    transpose = _require2.transpose,
    sliceMatrixRows = _require2.sliceMatrixRows,
    sliceMatrixCols = _require2.sliceMatrixCols,
    getTopRow = _require2.getTopRow,
    getBottomRow = _require2.getBottomRow,
    getAllButTopRow = _require2.getAllButTopRow,
    getAllButBottomRow = _require2.getAllButBottomRow,
    getMiddleRows = _require2.getMiddleRows,
    getLeftCol = _require2.getLeftCol,
    getAllButLeftCol = _require2.getAllButLeftCol,
    getRightCol = _require2.getRightCol,
    getAllButRightCol = _require2.getAllButRightCol,
    getMiddleCols = _require2.getMiddleCols;

var _require3 = require("./transforms"),
    getMinorDiagonals = _require3.getMinorDiagonals,
    getMajorDiagonals = _require3.getMajorDiagonals,
    flipOnRow = _require3.flipOnRow,
    flipOnCol = _require3.flipOnCol,
    getClockwiseSpiral = _require3.getClockwiseSpiral,
    getCounterClockwiseSpiral = _require3.getCounterClockwiseSpiral;

module.exports = {
  emptyMatrix: emptyMatrix,
  checkIfEmpty: checkIfEmpty,
  checkIfMatrix: checkIfMatrix,
  doMatrixOp: doMatrixOp,
  doColOperation: doColOperation,
  getMatrixHeight: getMatrixHeight,
  getMatrixWidth: getMatrixWidth,
  getMatrixDimensions: getMatrixDimensions,
  transpose: transpose,
  sliceMatrixRows: sliceMatrixRows,
  sliceMatrixCols: sliceMatrixCols,
  getTopRow: getTopRow,
  getBottomRow: getBottomRow,
  getAllButTopRow: getAllButTopRow,
  getAllButBottomRow: getAllButBottomRow,
  getMiddleRows: getMiddleRows,
  getLeftCol: getLeftCol,
  getAllButLeftCol: getAllButLeftCol,
  getRightCol: getRightCol,
  getAllButRightCol: getAllButRightCol,
  getMiddleCols: getMiddleCols,
  getMinorDiagonals: getMinorDiagonals,
  getMajorDiagonals: getMajorDiagonals,
  flipOnRow: flipOnRow,
  flipOnCol: flipOnCol,
  getClockwiseSpiral: getClockwiseSpiral,
  getCounterClockwiseSpiral: getCounterClockwiseSpiral
};
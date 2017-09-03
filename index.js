const {
  getFirstElmt,
  getAllButFirstElmt,
  getLastElmt,
  getAllButLastElmt,
  getMiddleElmts,
  filterOutEmptyArrays,
  flattenArray
} = require("./arrayUtils");

const {
  emptyMatrix,
  checkIfEmpty,
  checkIfMatrix,
  doMatrixOp,
  doColOperation,
  getMatrixHeight,
  getMatrixWidth,
  getMatrixDimensions,
  checkIfRowVector,
  checkIfColVector,
  checkIfVector,
  transpose,
  sliceMatrixRows,
  sliceMatrixCols,
  getTopRow,
  getBottomRow,
  getAllButTopRow,
  getAllButBottomRow,
  getMiddleRows,
  getLeftCol,
  getAllButLeftCol,
  getRightCol,
  getAllButRightCol,
  getMiddleCols
} = require("./matrixUtils");

const {
  getMinorDiagonals,
  getMajorDiagonals,
  flipOnRow,
  flipOnCol,
  getClockwiseSpiral,
  getCounterClockwiseSpiral
} = require("./transforms");

module.exports = {
  emptyMatrix,
  checkIfEmpty,
  checkIfMatrix,
  doMatrixOp,
  doColOperation,
  getMatrixHeight,
  getMatrixWidth,
  getMatrixDimensions,
  transpose,
  sliceMatrixRows,
  sliceMatrixCols,
  getTopRow,
  getBottomRow,
  getAllButTopRow,
  getAllButBottomRow,
  getMiddleRows,
  getLeftCol,
  getAllButLeftCol,
  getRightCol,
  getAllButRightCol,
  getMiddleCols,
  getMinorDiagonals,
  getMajorDiagonals,
  flipOnRow,
  flipOnCol,
  getClockwiseSpiral,
  getCounterClockwiseSpiral
};

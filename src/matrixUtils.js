const util = require("./arrayUtils");

// empty matrix
const emptyMatrix = [[]];

// check if matrix is empty
const checkIfEmpty = mtx => {
  const isAnArray = Array.isArray(mtx);

  return !isAnArray ? false : mtx.length === 1 ? mtx[0].length === 0 : false;
};

// check if nArray is a matrix
const checkIfMatrix = nArray => {
  if (nArray.length === 0) {
    return true;
  }

  const product = (acc, elmt) => Boolean(acc * elmt);

  const checkIfArrays = nArray.map(d => Array.isArray(d)).reduce(product, true);

  if (checkIfArrays === false) {
    return false;
  }

  const firstRow = nArray[0];
  const height = nArray.length;
  const width = firstRow.length;

  if (height < 2) {
    return true;
  } else {
    return nArray.map(d => d.length === width).reduce(product, true);
  }
};

// decorator to check if nArray is a matrix
const doMatrixCheck = fcn => (nArray, ...args) => {
  if (checkIfMatrix(nArray) === false) {
    console.error("not a matrix");
    throw new Error();
  } else {
    return fcn(nArray, ...args);
  }
};

// A decorator for any matrix operation:
// * check if it's the identity
// * check if it's a matrix
// * apply a function
// TODO think of other logic for this
const doMatrixOp = fcn => (nArray, ...args) => {
  if (checkIfEmpty(nArray)) {
    return emptyMatrix;
  } else {
    return doMatrixCheck(fcn)(nArray, ...args);
  }
};

// Get height of matrix
const getMatrixHeight = mtx => mtx.length;

// Get width of matrix
const getMatrixWidth = mtx => (mtx.length > 0 ? mtx[0].length : 0);

// Get matrix width and height
const getMatrixDimensions = mtx => {
  const height = getMatrixHeight(mtx);
  const width = getMatrixWidth(mtx);

  return { width, height };
};

// Slice rows from Matrix
const sliceMatrixRows = (mtx, startIndex, stopIndex) => {
  if (stopIndex === undefined) {
    return mtx.slice(startIndex);
  } else {
    return mtx.slice(startIndex, stopIndex);
  }
};

// Get top row from Matrix
const getTopRow = mtx => [util.getFirstElmt(mtx)];

// Get all but top row from matrix
const getAllButTopRow = mtx => util.getAllButFirstElmt(mtx);

// Get bottom row from matrix
const getBottomRow = mtx => [util.getLastElmt(mtx)];

// Get all but bottom row from matrix
const getAllButBottomRow = mtx => util.getAllButLastElmt(mtx);

// Get middle rows from matrix
const getMiddleRows = mtx => util.getMiddleElmts(mtx);

// Transpose a matrix
const transpose = mtx => {
  const width = getMatrixWidth(mtx);

  const leftCol = mtx.map(util.getFirstElmt);

  if (width < 2) {
    return [leftCol];
  } else {
    const rightCols = mtx.map(util.getAllButFirstElmt);
    return [leftCol, ...transpose(rightCols)];
  }
};

// Decorator for column operations
// transform matrix to row space, do operation, transpose back
const doColOperation = fcn => (mtx, ...args) => {
  return transpose(fcn(transpose(mtx), ...args));
};

// Decorator for column operations with matrix checking
const colOpMatrixCheck = fcn => (nArray, ...args) => {
  return doMatrixOp(doColOperation(fcn))(nArray, ...args);
};

module.exports = {
  emptyMatrix,
  checkIfEmpty,
  checkIfMatrix,
  doMatrixOp,
  doColOperation,
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

import { transpose } from "./transpose";

// the empty matrix
const emptyMatrix = [[]];

// check if matrix is empty
const checkIfEmptyMatrix = mtx => {
  const isAnArray = Array.isArray(mtx);

  return !isAnArray ? false : mtx.length === 1 ? mtx[0].length === 0 : false;
};

// boolean product, passed to a reducer
const booleanProduct = (acc, curr) => Boolean(acc * curr);

// check if nArray is a matrix
const checkIfMatrix = nArray => {
  if (nArray.length === 0) {
    return true;
  }

  const checkIfArrays = nArray
    .map(d => Array.isArray(d))
    .reduce(booleanProduct, true);

  if (checkIfArrays === false) {
    return false;
  }

  const firstRow = nArray[0];
  const height = nArray.length;
  const width = firstRow.length;

  if (height < 2) {
    return true;
  } else {
    return nArray.map(d => d.length === width).reduce(booleanProduct, true);
  }
};

// decorator to check if nArray is a matrix
export const doMatrixCheck = fcn => (nArray, ...args) => {
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
export const matrixWrapper = fcn => (nArray, ...args) => {
  if (checkIfEmptyMatrix(nArray)) {
    return emptyMatrix;
  } else {
    return doMatrixCheck(fcn)(nArray, ...args);
  }
};

// transform matrix to column space, do operation, transpose back
export const doColumnOperation = fcn => (mtx, ...args) => {
  return transpose(fcn(transpose(mtx), ...args));
};

import {
  getFirstElement,
  getLastElement,
  getAllButFirstElement,
  getAllButLastElement,
  getMiddleElements
} from "./arrayUtils";
import { doColumnOperation } from "./matrixDecorators";

// Slice rows from matrix
export const sliceMatrixRows = (mtx, startIndex, stopIndex) => {
  if (stopIndex === undefined) {
    return mtx.slice(startIndex);
  } else {
    return mtx.slice(startIndex, stopIndex);
  }
};

// Get top row from matrix
export const getTopRow = mtx => [getFirstElement(mtx)];

// Get all but top row from matrix
export const getAllButTopRow = mtx => getAllButFirstElement(mtx);

// Get bottom row from matrix
export const getBottomRow = mtx => [getLastElement(mtx)];

// Get all but bottom row from matrix
export const getAllButBottomRow = mtx => getAllButLastElement(mtx);

// Get middle rows from matrix
export const getMiddleRows = mtx => getMiddleElements(mtx);

// Slice columns from matrix
export const sliceMatrixCols = doColumnOperation(sliceMatrixRows);

// get left column from matrix
export const getLeftCol = doColumnOperation(getTopRow);

// get all but the left column from matrix
export const getAllButLeftCol = doColumnOperation(getAllButTopRow);

// get right column from matrix
export const getRightCol = doColumnOperation(getBottomRow);

// get all but right column from matrix
export const getAllButRightCol = doColumnOperation(getAllButBottomRow);

// get middle rows from matrix
export const getMiddleCols = doColumnOperation(getMiddleRows);

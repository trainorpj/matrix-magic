import { transpose } from "./transpose";
import { flattenArray } from "./arrayUtils";
import { getMatrixDimensions } from "./matrixDimensions";
import {
  getLeftCol,
  getTopRow,
  getBottomRow,
  getMiddleRows,
  getRightCol,
  getMiddleCols
} from "./matrixSlice";

const formatOuterSpiral = (top, right, bottom, left) => {
  const edgeArray = [
    ...top,
    ...right,
    flattenArray(bottom).reverse(),
    flattenArray(left).reverse()
  ];

  return flattenArray(edgeArray).filter(d => d !== undefined);
};

// get clockwise spiral of matrix
// TODO
// * better logic for terminal step... perhaps checkIfRowVector?
// * too many flatten statements... can I fix that?
export const getClockwiseSpiral = matrix => {
  const { width, height } = getMatrixDimensions(matrix);

  // terminal step if matrix is a row/column vector
  if (width < 2 || height < 2) {
    if (width === 0) {
      return [];
    } else {
      return height > width ? [...getLeftCol(matrix)] : [...getTopRow(matrix)];
    }
  } else {
    // get top row
    const topRow = getTopRow(matrix);
    // get bottom row
    const botRow = getBottomRow(matrix);
    // get everything but top and bottom rows
    const middleMatrix = getMiddleRows(matrix);

    // get left column (minus top/bottom entries)
    const leftCol = getLeftCol(middleMatrix);
    // get right column (minus top/bottom entries)
    const rightCol = getRightCol(middleMatrix);

    // combine top, right, bottom, and left into an array
    const edgeArr = formatOuterSpiral(topRow, rightCol, botRow, leftCol);

    // get everything you didn't use
    const newMtx = getMiddleCols(middleMatrix);

    // append spiral array, then call again on the middle matrix
    const spiralArray = [edgeArr, ...getClockwiseSpiral(newMtx)];

    // flatten the array once more
    return flattenArray(spiralArray);
  }
};

export const getCounterClockwiseSpiral = matrix =>
  getClockwiseSpiral(transpose(matrix));

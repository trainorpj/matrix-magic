import { getFirstElement, getAllButFirstElement } from "./arrayUtils";
import { getMatrixWidth } from "./matrixDimensions";

// Transpose a matrix
export const transpose = mtx => {
  const width = getMatrixWidth(mtx);

  const leftCol = mtx.map(getFirstElement);

  if (width < 2) {
    return [leftCol];
  } else {
    const rightCols = mtx.map(getAllButFirstElement);
    return [leftCol, ...transpose(rightCols)];
  }
};

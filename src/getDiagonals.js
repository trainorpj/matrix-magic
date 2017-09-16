import { getMatrixDimensions } from "./matrixDimensions";
import { doColumnOperation } from "./matrixDecorators";
import { flipRows } from "./matrixShift";
import { filterOutEmptyArrays } from "./arrayUtils";

// Given a height and width, it returns the
// length of the kth diagonal
const lengthOfDiagonalFcn = (hgt, wid) => k =>
  Math.min(hgt, wid, wid - k, hgt + k);

// return minor diagonals as an nArray
export const getMinorDiagonals = matrix => {
  // get height and width of matrix
  const { width, height } = getMatrixDimensions(matrix);

  // set up function to determine the length of a diagonal
  const getDiagonalLength = lengthOfDiagonalFcn(height, width);

  // start at the top-left diagonal--this has index 1 - height (a negative number),
  // the program increments until it hits width - 1
  const startIndex = 1 - height;
  const stopIndex = width - 1;

  // define a recursive function that will extract the diagonals
  const getDiagonals = (nArray, index) => {
    // get the length of the current diagonal
    const lengthOfDiagonal = getDiagonalLength(index);

    // the values on the diagonals have been shifted so they're
    // at the beginning of the top rows... get the top rows
    const topRows = nArray.slice(0, lengthOfDiagonal);

    // get the first values of the top rows
    // note: need to reverse to preserve left-to-right order
    const heads = topRows.map(row => row[0]).reverse();

    // terminate if index reaches width - 1
    if (index === stopIndex) {
      // return value in bottom-right corner of original matrix
      return [heads];
    } else {
      // get tails of top rows
      const topTails = topRows.map(row => row.slice(1));
      // get rows that we didn't extract from
      const botRows = nArray.slice(lengthOfDiagonal);
      // join tails and bottom rows
      // filter out empty arrays []
      const newMatrix = filterOutEmptyArrays([...topTails, ...botRows]);

      // recursive step: call getDiagonals on reduced matrix, and
      // join with heads
      return [heads, ...getDiagonals(newMatrix, index + 1)];
    }
  };

  // call getDiagonals from the starting index
  return getDiagonals(matrix, startIndex);
};

// Get major diagonals
// flip matrix on top row, then get the minor diagonals
export const getMajorDiagonals = matrix => getMinorDiagonals(flipRows(matrix));

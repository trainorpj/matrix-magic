const util = require("./arrayUtils");
const mtx = require("./matrixUtils");

/**
|--------------------------------------------------
| Helpers
|--------------------------------------------------
*/

// Given a height and width, it returns the
// length of the kth diagonal
const lengthOfDiagonalFcn = (hgt, wid) => k =>
  Math.min(hgt, wid, wid - k, hgt + k);

// Get outer edge of spiral in one array
const formatOuterSpiral = (top, right, bottom, left) => {
  const edgeArray = [
    ...top,
    ...right,
    util.flattenArray(bottom).reverse(),
    util.flattenArray(left).reverse()
  ];

  return util.flattenArray(edgeArray).filter(d => d !== undefined);
};

// Do operation on columns
const doColOperation = mtx.doColOperation;

// matrix check decorator
const check = mtx.doMatrixOp;

// matrix check then flatten decorator
// used for spiral function
const checkThenFlatten = fcn => (nArray, ...args) => {
  return util.flattenArray(check(fcn)(nArray));
};

/**
|--------------------------------------------------
| Diagonals
|--------------------------------------------------
*/
const getMinorDiagonals = matrix => {
  // get height and width of matrix
  const { width, height } = mtx.getMatrixDimensions(matrix);

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
      const newMatrix = util.filterOutEmptyArrays([...topTails, ...botRows]);

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
const getMajorDiagonals = matrix => {
  return getMinorDiagonals(flipOnRow(matrix, 0));
};

/**
|--------------------------------------------------
| Row Swapping
|--------------------------------------------------
*/

// flip the nArray on the given row index
// TODO consider using permutation groups/matrix operations
const flipOnRow = (matrix, rowIndex) => {
  const top = mtx.sliceMatrixRows(matrix, 0, rowIndex);
  const middle = [matrix[rowIndex]];
  const bottom = mtx.sliceMatrixRows(matrix, rowIndex + 1);

  const [newBot, newMid, newTop] = [top, middle, bottom].map(d => d.reverse());

  return [...newTop, ...newMid, ...newBot];
};

const flipOnCol = doColOperation(flipOnRow);

/**
|--------------------------------------------------
| Spiral
|--------------------------------------------------
*/

// get clockwise spiral of matrix
// TODO
// * better logic for terminal step... perhaps checkIfRowVector?
// * too many flatten statements... can I fix that?
const getClockwiseSpiral = matrix => {
  const { width, height } = mtx.getMatrixDimensions(matrix);

  // terminal step if matrix is a row/column vector
  if (width < 2 || height < 2) {
    if (width === 0) {
      return [];
    } else {
      return height > width
        ? [...mtx.getLeftCol(matrix)]
        : [...mtx.getTopRow(matrix)];
    }
  } else {
    // get top row
    const topRow = mtx.getTopRow(matrix);
    // get bottom row
    const botRow = mtx.getBottomRow(matrix);
    // get everything but top and bottom rows
    const middleMatrix = mtx.getMiddleRows(matrix);

    // get left column (minus top/bottom entries)
    const leftCol = mtx.getLeftCol(middleMatrix);
    // get right column (minus top/bottom entries)
    const rightCol = mtx.getRightCol(middleMatrix);

    // combine top, right, bottom, and left into an array
    const edgeArr = formatOuterSpiral(topRow, rightCol, botRow, leftCol);

    // get everything you didn't use
    const newMtx = mtx.getMiddleCols(middleMatrix);

    // append spiral array, then call again on the middle matrix
    const spiralArray = [edgeArr, ...getClockwiseSpiral(newMtx)];

    // flatten the array once more
    return util.flattenArray(spiralArray);
  }
};

const getCounterClockwiseSpiral = matrix =>
  getClockwiseSpiral(mtx.transpose(matrix));

module.exports = {
  getMinorDiagonals: check(getMinorDiagonals),
  getMajorDiagonals: check(getMajorDiagonals),
  flipOnRow: check(flipOnRow),
  flipOnCol: check(flipOnCol),
  getClockwiseSpiral: checkThenFlatten(getClockwiseSpiral),
  getCounterClockwiseSpiral: checkThenFlatten(getCounterClockwiseSpiral)
};

// Get height of matrix
export const getMatrixHeight = mtx => mtx.length;

// Get width of matrix
export const getMatrixWidth = mtx => (mtx.length > 0 ? mtx[0].length : 0);

// Get matrix width and height
// return {width, height} object
export const getMatrixDimensions = mtx => {
  const height = getMatrixHeight(mtx);
  const width = getMatrixWidth(mtx);

  return { width, height };
};

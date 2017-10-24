export {
  getFirstElement,
  getAllButFirstElement,
  getLastElement,
  getAllButLastElement,
  getMiddleElements,
  filterOutEmptyArrays,
  flattenArray
} from "./arrayUtils";

import { transpose as transpose_ } from "./transpose";

import {
  doMatrixCheck,
  matrixWrapper,
  doColumnOperation
} from "./matrixDecorators";

export { doMatrixCheck, matrixWrapper, doColumnOperation };

import { applyToEntries as applyToEntries_ } from "./matrixDecorators";

import {
  getMatrixWidth as getMatrixWidth_,
  getMatrixHeight as getMatrixHeight_,
  getMatrixDimensions as getMatrixDimensions_
} from "./matrixDimensions";

import { flipRows as flipRows_, flipCols as flipCols_ } from "./matrixShift";

import {
  sliceMatrixRows as sliceMatrixRows_,
  getTopRow as getTopRow_,
  getAllButTopRow as getAllButTopRow_,
  getBottomRow as getBottomRow_,
  getAllButBottomRow as getAllButBottomRow_,
  getMiddleRows as getMiddleRows_,
  sliceMatrixCols as sliceMatrixCols_,
  getLeftCol as getLeftCol_,
  getAllButLeftCol as getAllButLeftCol_,
  getRightCol as getRightCol_,
  getAllButRightCol as getAllButRightCol_,
  getMiddleCols as getMiddleCols_
} from "./matrixSlice";

import {
  getMinorDiagonals as getMinorDiagonals_,
  getMajorDiagonals as getMajorDiagonals_
} from "./getDiagonals";

import {
  getClockwiseSpiral as getClockwiseSpiral_,
  getCounterClockwiseSpiral as getCounterClockwiseSpiral_
} from "./getSpiral";

const wrp = matrixWrapper;

export const transpose = wrp(transpose_);
export const applyToEntries = wrp(applyToEntries_);

export const getMatrixWidth = wrp(getMatrixWidth_);
export const getMatrixHeight = wrp(getMatrixHeight_);
export const getMatrixDimensions = wrp(getMatrixDimensions_);
export const sliceMatrixRows = wrp(sliceMatrixRows_);
export const getTopRow = wrp(getTopRow_);
export const getAllButTopRow = wrp(getAllButTopRow_);
export const getBottomRow = wrp(getBottomRow_);
export const getAllButBottomRow = wrp(getAllButBottomRow_);
export const getMiddleRows = wrp(getMiddleRows_);
export const sliceMatrixCols = wrp(sliceMatrixCols_);
export const getLeftCol = wrp(getLeftCol_);
export const getAllButLeftCol = wrp(getAllButLeftCol_);
export const getRightCol = wrp(getAllButRightCol_);
export const getAllButRightCol = wrp(getAllButRightCol_);
export const getMiddleCols = wrp(getMiddleCols_);

export const flipRows = wrp(flipRows_);
export const flipCols = wrp(flipCols_);

export const getMinorDiagonals = wrp(getMinorDiagonals_);
export const getMajorDiagonals = wrp(getMajorDiagonals_);

export const getClockwiseSpiral = wrp(getClockwiseSpiral_);
export const getCounterClockwiseSpiral = wrp(getCounterClockwiseSpiral_);

import {
  getMatrixHeight,
  getMatrixWidth,
  getMatrixDimensions,
  transpose,
  sliceMatrixRows,
  sliceMatrixCols,
  getMiddleElements,
  doMatrixCheck
} from "../src/index";
import { SQUARE, TALL, WIDE, ROW, COL, BIG } from "./globals";

/**
|--------------------------------------------------
| Tests
|--------------------------------------------------
*/

it("should get height of various nArrays", () => {
  const nArray = [[1], [2, 3], "abc"];

  expect(() => {
    getMatrixHeight(nArray);
  }).toThrow();
  expect(getMatrixHeight(SQUARE)).toEqual(3);
  expect(getMatrixHeight(ROW)).toEqual(1);
  expect(getMatrixHeight(COL)).toEqual(3);
});

it("should should get width of various nArrays", () => {
  const nArray = [[1], [2, 3], "abc"];

  expect(() => {
    getMatrixWidth(nArray);
  }).toThrow();
  expect(getMatrixWidth(SQUARE)).toEqual(3);
  expect(getMatrixWidth(ROW)).toEqual(3);
  expect(getMatrixWidth(COL)).toEqual(1);
});

it("should get dimensions of various nArrays", () => {
  const nArray = [[1], [2, 3], "abc"];

  const expectedOutput = {
    square: { width: 3, height: 3 },
    row: { width: 3, height: 1 },
    col: { width: 1, height: 3 }
  };

  expect(() => {
    getMatrixWidth(nArray);
  }).toThrow();
  expect(getMatrixDimensions(SQUARE)).toEqual(expectedOutput.square);
  expect(getMatrixDimensions(ROW)).toEqual(expectedOutput.row);
  expect(getMatrixDimensions(COL)).toEqual(expectedOutput.col);
});

it("should get middle elements of an array", () => {
  const arrInput = [0, 1, 2, 3, 4];
  const emptyInput = [];
  const expectedOutput = {
    arr: [1, 2, 3],
    emp: []
  };

  expect(getMiddleElements(arrInput)).toEqual(expectedOutput.arr);
  expect(getMiddleElements(emptyInput)).toEqual(expectedOutput.emp);
});

it("should slice rows of a square matrix", () => {
  const inputs = {
    topRows: [0, 2],
    botRows: [1],
    sameRows: [1, 1],
    copy: []
  };
  const expectedOutput = {
    topRows: [[1, 2, 3], [4, 5, 6]],
    botRows: [[4, 5, 6], [7, 8, 9]],
    sameRows: [],
    copy: SQUARE
  };

  expect(sliceMatrixRows(SQUARE, ...inputs.topRows)).toEqual(
    expectedOutput.topRows
  );
  expect(sliceMatrixRows(SQUARE, ...inputs.botRows)).toEqual(
    expectedOutput.botRows
  );
  expect(sliceMatrixRows(SQUARE, ...inputs.sameRows)).toEqual(
    expectedOutput.sameRows
  );
  expect(sliceMatrixRows(SQUARE, ...inputs.copy)).toEqual(expectedOutput.copy);
});

it("should slice columns of a square matrix", () => {
  const inputs = {
    leftCols: [0, 2],
    rightCols: [1],
    sameCols: [1, 1],
    copy: []
  };
  const expectedOutput = {
    leftCols: [[1, 2], [4, 5], [7, 8]],
    rightCols: [[2, 3], [5, 6], [8, 9]],
    sameCols: [[]],
    copy: SQUARE
  };

  expect(sliceMatrixCols(SQUARE, ...inputs.leftCols)).toEqual(
    expectedOutput.leftCols
  );
  expect(sliceMatrixCols(SQUARE, ...inputs.rightCols)).toEqual(
    expectedOutput.rightCols
  );
  expect(sliceMatrixCols(SQUARE, ...inputs.sameCols)).toEqual(
    expectedOutput.sameCols
  );
  expect(sliceMatrixCols(SQUARE, ...inputs.copy)).toEqual(expectedOutput.copy);
});

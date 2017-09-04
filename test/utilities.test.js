const arr = require("../src/arrayUtils");
const mtx = require("../src/matrixUtils");
const GLOBALS = require("./globals");

/**
|--------------------------------------------------
| Global Inputs
|--------------------------------------------------
*/

const { SQUARE, TALL, WIDE, ROW, COL, BIG } = GLOBALS;

/**
|--------------------------------------------------
| Tests
|--------------------------------------------------
*/

it("should check if matrix is empty", () => {
  expect(mtx.checkIfEmpty([[]])).toEqual(true);
  expect(mtx.checkIfEmpty([])).toEqual(false);
  expect(mtx.checkIfEmpty(SQUARE)).toEqual(false);
});

it("should check if various nArrays are a matrices", () => {
  const nArray = [[1], [2, 3]];
  const strArray = [[1, 2, 4], "abc"];

  expect(mtx.checkIfMatrix(nArray)).toEqual(false);
  expect(mtx.checkIfMatrix(strArray)).toEqual(false);
  expect(mtx.checkIfMatrix(SQUARE)).toEqual(true);
  expect(mtx.checkIfMatrix([])).toEqual(true);
});

it("should get height of various nArrays", () => {
  const nArray = [[1], [2, 3], "abc"];

  expect(() => {
    mtx.getMatrixHeight(nArray);
  }).toThrow();
  expect(mtx.getMatrixHeight(SQUARE)).toEqual(3);
  expect(mtx.getMatrixHeight(ROW)).toEqual(1);
  expect(mtx.getMatrixHeight(COL)).toEqual(3);
});

it("should should get width of various nArrays", () => {
  const nArray = [[1], [2, 3], "abc"];

  expect(() => {
    mtx.getMatrixWidth(nArray);
  }).toThrow();
  expect(mtx.getMatrixWidth(SQUARE)).toEqual(3);
  expect(mtx.getMatrixWidth(ROW)).toEqual(3);
  expect(mtx.getMatrixWidth(COL)).toEqual(1);
});

it("should get dimensions of various nArrays", () => {
  const nArray = [[1], [2, 3], "abc"];

  const expectedOutput = {
    square: { width: 3, height: 3 },
    row: { width: 3, height: 1 },
    col: { width: 1, height: 3 }
  };

  expect(() => {
    mtx.getMatrixWidth(nArray);
  }).toThrow();
  expect(mtx.getMatrixDimensions(SQUARE)).toEqual(expectedOutput.square);
  expect(mtx.getMatrixDimensions(ROW)).toEqual(expectedOutput.row);
  expect(mtx.getMatrixDimensions(COL)).toEqual(expectedOutput.col);
});

it("should get middle elements of an array", () => {
  const arrInput = [0, 1, 2, 3, 4];
  const emptyInput = [];
  const expectedOutput = {
    arr: [1, 2, 3],
    emp: []
  };

  expect(arr.getMiddleElmts(arrInput)).toEqual(expectedOutput.arr);
  expect(arr.getMiddleElmts(emptyInput)).toEqual(expectedOutput.emp);
});

it("should transpose matrices of different sizes", () => {
  const input = { SQUARE, TALL, WIDE, ROW, COL };
  const expectedOutput = {
    SQUARE: [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
    TALL: [[1, 3, 5], [2, 4, 6]],
    WIDE: [[1, 4], [2, 5], [3, 6]],
    ROW: [[1], [2], [3]],
    COL: [[1, 2, 3]]
  };

  const testCase = str =>
    expect(mtx.transpose(input[str])).toEqual(expectedOutput[str]);

  testCase("SQUARE");
  testCase("TALL");
  testCase("WIDE");
  testCase("ROW");
  testCase("COL");
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

  expect(mtx.sliceMatrixRows(SQUARE, ...inputs.topRows)).toEqual(
    expectedOutput.topRows
  );
  expect(mtx.sliceMatrixRows(SQUARE, ...inputs.botRows)).toEqual(
    expectedOutput.botRows
  );
  expect(mtx.sliceMatrixRows(SQUARE, ...inputs.sameRows)).toEqual(
    expectedOutput.sameRows
  );
  expect(mtx.sliceMatrixRows(SQUARE, ...inputs.copy)).toEqual(
    expectedOutput.copy
  );
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

  expect(mtx.sliceMatrixCols(SQUARE, ...inputs.leftCols)).toEqual(
    expectedOutput.leftCols
  );
  expect(mtx.sliceMatrixCols(SQUARE, ...inputs.rightCols)).toEqual(
    expectedOutput.rightCols
  );
  expect(mtx.sliceMatrixCols(SQUARE, ...inputs.sameCols)).toEqual(
    expectedOutput.sameCols
  );
  expect(mtx.sliceMatrixCols(SQUARE, ...inputs.copy)).toEqual(
    expectedOutput.copy
  );
});

it("should get top/bottom/middle rows of square matrix", () => {
  const expectedOutput = {
    getTopRow: [[1, 2, 3]],
    getBottomRow: [[7, 8, 9]],
    getMiddleRows: [[4, 5, 6]],
    getAllButTopRow: [[4, 5, 6], [7, 8, 9]],
    getAllButBottomRow: [[1, 2, 3], [4, 5, 6]]
  };

  const testCase = str => expect(mtx[str](SQUARE)).toEqual(expectedOutput[str]);
  testCase("getTopRow");
  testCase("getBottomRow");
  testCase("getMiddleRows");
  testCase("getAllButTopRow");
  testCase("getAllButBottomRow");
});

it("should get top/bottom/middle columns of square matrix", () => {
  const expectedOutput = {
    getLeftCol: [[1], [4], [7]],
    getRightCol: [[3], [6], [9]],
    getMiddleCols: [[2], [5], [8]],
    getAllButLeftCol: [[2, 3], [5, 6], [8, 9]],
    getAllButRightCol: [[1, 2], [4, 5], [7, 8]]
  };

  const testCase = str => expect(mtx[str](SQUARE)).toEqual(expectedOutput[str]);
  testCase("getLeftCol");
  testCase("getRightCol");
  testCase("getMiddleCols");
  testCase("getAllButLeftCol");
  testCase("getAllButRightCol");
});

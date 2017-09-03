const { SQUARE, TALL, WIDE, ROW, COL, BIG } = require("./globals");
const { getMinorDiagonals, getMajorDiagonals } = require("../index");

/**
|--------------------------------------------------
| Empty Case
|--------------------------------------------------
*/
it("should should get minor/major diagonals of an empty matrix", () => {
  expect(getMinorDiagonals([[]])).toEqual([[]]);
  expect(getMajorDiagonals([[]])).toEqual([[]]);
  expect(() => getMinorDiagonals([])).toThrow();
  expect(() => getMajorDiagonals([])).toThrow();
});

/**
|--------------------------------------------------
| Minor Diagonals
|--------------------------------------------------
*/

// SQUARE
it("should get minor diagonals of a square matrix", () => {
  const expectedOutput = [[1], [4, 2], [7, 5, 3], [8, 6], [9]];
  expect(getMinorDiagonals(SQUARE)).toEqual(expectedOutput);
});

// WIDE
it("should get minor diagonals of a wide matrix", () => {
  const expectedOutput = [[1], [4, 2], [5, 3], [6]];
  expect(getMinorDiagonals(WIDE)).toEqual(expectedOutput);
});

// TALL
it("should get minor diagonals of a tall matrix", () => {
  const expectedOutput = [[1], [3, 2], [5, 4], [6]];
  expect(getMinorDiagonals(TALL)).toEqual(expectedOutput);
});

// ROW
it("should get minor diagonals of a row matrix", () => {
  const expectedOutput = [[1], [2], [3]];
  expect(getMinorDiagonals(ROW)).toEqual(expectedOutput);
});

// COLUMN
it("should get minor diagonals of a column matrix", () => {
  const expectedOutput = [[1], [2], [3]];
  expect(getMinorDiagonals(COL)).toEqual(expectedOutput);
});

/**
|--------------------------------------------------
| Major Diagonals
|--------------------------------------------------
*/

// SQUARE
it("should get major diagonals of a square matrix", () => {
  const expectedOutput = [[7], [4, 8], [1, 5, 9], [2, 6], [3]];
  expect(getMajorDiagonals(SQUARE)).toEqual(expectedOutput);
});

// WIDE
it("should get major diagonals of a wide matrix", () => {
  const expectedOutput = [[4], [1, 5], [2, 6], [3]];
  expect(getMajorDiagonals(WIDE)).toEqual(expectedOutput);
});

// TALL
it("should get major diagonals of a tall matrix", () => {
  const expectedOutput = [[5], [3, 6], [1, 4], [2]];
  expect(getMajorDiagonals(TALL)).toEqual(expectedOutput);
});

// ROW
it("should get major diagonals of a row matrix", () => {
  const expectedOutput = [[1], [2], [3]];

  expect(getMajorDiagonals(ROW)).toEqual(expectedOutput);
});

// COL
it("should get major diagonals of a column matrix", () => {
  const expectedOutput = [[3], [2], [1]];
  expect(getMajorDiagonals(COL)).toEqual(expectedOutput);
});

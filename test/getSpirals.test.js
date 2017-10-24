import { SQUARE, TALL, WIDE, ROW, COL, BIG } from "./globals";
import { getClockwiseSpiral, getCounterClockwiseSpiral } from "../src/index";

/**
|--------------------------------------------------
| Clockwise Spiral
|--------------------------------------------------
*/

// SQUARE
it("should get clockwise spiral array for square matrix", () => {
  const expectedOutput = [1, 2, 3, 6, 9, 8, 7, 4, 5];
  expect(getClockwiseSpiral(SQUARE)).toEqual(expectedOutput);
});

// WIDE
it("should get clockwise spiral array for wide matrix", () => {
  const expectedOutput = [1, 2, 3, 6, 5, 4];
  expect(getClockwiseSpiral(WIDE)).toEqual(expectedOutput);
});

// TALL
it("should get clockwise spiral array for tall matrix", () => {
  const expectedOutput = [1, 2, 4, 6, 5, 3];
  expect(getClockwiseSpiral(TALL)).toEqual(expectedOutput);
});

// ROW
it("should get clockwise spiral array for row matrix", () => {
  const expectedOutput = [1, 2, 3];
  expect(getClockwiseSpiral(ROW)).toEqual(expectedOutput);
});

// COL
it("should get clockwise spiral array for col matrix", () => {
  const expectedOutput = [1, 2, 3];
  expect(getClockwiseSpiral(COL)).toEqual(expectedOutput);
});

// BIG
it("should get clockwise spiral array for big matrix", () => {
  const expectedOutput = [
    1,
    2,
    3,
    4,
    5,
    6,
    12,
    18,
    24,
    23,
    22,
    21,
    20,
    19,
    13,
    7,
    8,
    9,
    10,
    11,
    17,
    16,
    15,
    14
  ];
  expect(getClockwiseSpiral(BIG)).toEqual(expectedOutput);
});

/**
|--------------------------------------------------
| Clockwise Spiral
|--------------------------------------------------
*/

// SQUARE
it("should get counter-clockwise spiral array for square matrix", () => {
  const expectedOutput = [1, 4, 7, 8, 9, 6, 3, 2, 5];
  expect(getCounterClockwiseSpiral(SQUARE)).toEqual(expectedOutput);
});

// WIDE
it("should get counter-clockwise spiral array for wide matrix", () => {
  const expectedOutput = [1, 4, 5, 6, 3, 2];
  expect(getCounterClockwiseSpiral(WIDE)).toEqual(expectedOutput);
});

// TALL
it("should get counter-clockwise spiral array for tall matrix", () => {
  const expectedOutput = [1, 3, 5, 6, 4, 2];
  expect(getCounterClockwiseSpiral(TALL)).toEqual(expectedOutput);
});

// ROW
it("should get counter-clockwise spiral array for row matrix", () => {
  const expectedOutput = [1, 2, 3];
  expect(getCounterClockwiseSpiral(ROW)).toEqual(expectedOutput);
});

// COL
it("should get counter-clockwise spiral array for column matrix", () => {
  const expectedOutput = [1, 2, 3];
  expect(getCounterClockwiseSpiral(COL)).toEqual(expectedOutput);
});

// BIG
it("should get counter-clockwise spiral array for big matrix", () => {
  const expectedOutput = [
    1,
    7,
    13,
    19,
    20,
    21,
    22,
    23,
    24,
    18,
    12,
    6,
    5,
    4,
    3,
    2,
    8,
    14,
    15,
    16,
    17,
    11,
    10,
    9
  ];
  expect(getCounterClockwiseSpiral(BIG)).toEqual(expectedOutput);
});

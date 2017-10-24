import { applyToEntries } from "../src";
import { SQUARE, TALL, WIDE, ROW, COL, BIG } from "./globals";

// Declare cube function for testing
const cube = x => x * x * x;

// SQUARE
it("should cube entries of SQUARE matrix", () => {
  const expectedOutput = [[1, 8, 27], [64, 125, 216], [343, 512, 729]];
  expect(applyToEntries(SQUARE)(cube)).toEqual(expectedOutput);
});

// ROW
it("should cube entries of ROW matrix", () => {
  const expectedOutput = [[1, 8, 27]];
  expect(applyToEntries(ROW)(cube)).toEqual(expectedOutput);
});

// COL
it("should cube entries of COL matrix", () => {
  const expectedOutput = [[1], [8], [27]];
  expect(applyToEntries(COL)(cube)).toEqual(expectedOutput);
});

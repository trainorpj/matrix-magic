import { SQUARE, TALL, WIDE, ROW, COL, BIG } from "./globals";
import { transpose } from "../src/index";

it("should transpose a square matrix", () => {
  const expectedOutput = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
  expect(transpose(SQUARE)).toEqual(expectedOutput);
});

it("should transpose a tall matrix", () => {
  const expectedOutput = [[1, 3, 5], [2, 4, 6]];
  expect(transpose(TALL)).toEqual(expectedOutput);
});

it("should transpose a wide matrix", () => {
  const expectedOutput = [[1, 4], [2, 5], [3, 6]];
  expect(transpose(WIDE)).toEqual(expectedOutput);
});

it("should transpose a row matrix", () => {
  const expectedOutput = [[1], [2], [3]];
  expect(transpose(ROW)).toEqual(expectedOutput);
});

it("should transpose a column matrix", () => {
  const expectedOutput = [[1, 2, 3]];
  expect(transpose(COL)).toEqual(expectedOutput);
});

import { SQUARE, TALL, WIDE, ROW, COL, BIG } from "./globals";
import { flipRows, flipCols } from "../src/index";

/**
|--------------------------------------------------
| Simple Transforms
|--------------------------------------------------
*/

it("should flip square matrix on a row", () => {
  const expectedOutput = {
    top: [[7, 8, 9], [4, 5, 6], [1, 2, 3]],
    mid: [[7, 8, 9], [4, 5, 6], [1, 2, 3]],
    bot: [[7, 8, 9], [4, 5, 6], [1, 2, 3]]
  };
  expect(flipRows(SQUARE)).toEqual(expectedOutput.top);
  expect(flipRows(SQUARE)).toEqual(expectedOutput.mid);
  expect(flipRows(SQUARE)).toEqual(expectedOutput.bot);
});

it("should flip square matrix on a column", () => {
  const expectedOutput = {
    left: [[3, 2, 1], [6, 5, 4], [9, 8, 7]],
    mid: [[3, 2, 1], [6, 5, 4], [9, 8, 7]],
    right: [[3, 2, 1], [6, 5, 4], [9, 8, 7]]
  };
  expect(flipCols(SQUARE)).toEqual(expectedOutput.left);
  expect(flipCols(SQUARE)).toEqual(expectedOutput.mid);
  expect(flipCols(SQUARE)).toEqual(expectedOutput.right);
});

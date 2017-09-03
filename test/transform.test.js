const { SQUARE, TALL, WIDE, ROW, COL, BIG } = require("./globals");
const { flipOnCol, flipOnRow } = require("../index");

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
  expect(flipOnRow(SQUARE, 0)).toEqual(expectedOutput.top);
  expect(flipOnRow(SQUARE, 1)).toEqual(expectedOutput.mid);
  expect(flipOnRow(SQUARE, 2)).toEqual(expectedOutput.bot);
});

it("should flip square matrix on a column", () => {
  const expectedOutput = {
    left: [[3, 2, 1], [6, 5, 4], [9, 8, 7]],
    mid: [[3, 2, 1], [6, 5, 4], [9, 8, 7]],
    right: [[3, 2, 1], [6, 5, 4], [9, 8, 7]]
  };
  expect(flipOnCol(SQUARE, 0)).toEqual(expectedOutput.left);
  expect(flipOnCol(SQUARE, 1)).toEqual(expectedOutput.mid);
  expect(flipOnCol(SQUARE, 2)).toEqual(expectedOutput.right);
});

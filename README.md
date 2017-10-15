# matrix-magic

`npm install --save matrix-magic`

[Try it on runkit](https://npm.runkit.com/matrix-magic)

This library performs various transformations on matrices.  This library does not do matrix operations (or more specifically, matrix multiplication), but serves to manipulate the shape of a matrix.  It does stuff like this:

```
getMajorDiagonals()

[[a, b, c],         [[e],
 [d, a, b],   -->    [d, d],
 [e, d, a]]          [a, a, a],
                     [b, b],
                     [c]]
```

Here's another fun one:

```
getClockwiseSpiral()

[[1, 2, 3],         
 [8, 9, 4],   -->  [1, 2, 3, 4, 5, 6, 7, 8, 9]
 [7, 6, 5]]

```

It also provides some utilities to work with matrices:

```
transpose()

[[a, b, c],          [[a, a, a],
 [a, b, c],   -->     [b, b, b],
 [a, b, c]]           [c, c, c]]
```

```
getMiddleCols()

[[*, 1, 2, 3, *],          [[1, 2, 3],
 [*, 4, 5, 6, *],    -->    [4, 5, 6],
 [*, 7, 8, 9, *]]           [7, 8, 9]]

```

# Library

Note that in the following functions, `matrix` is an array of arrays, where each sub-array has the same length.  Most of these functions will throw an error if the input is not a matrix.

## Matrix Utilities

### `getMatrixWidth(matrix)`

Returns the width of `matrix` i.e. the number of columns.

### `getMatrixHeight(matrix)`

Returns the height of `matrix` i.e. the number of rows.

### `getMatrixDimensions(matrix)`

Returns and object `{width, height}`, where `width` is the number of columns in `matrix`, and `height` is the number of rows in `matrix`.

## Row Utilities [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/matrixSlice.js)

### `sliceMatrixRows(matrix, start, stop)`

Returns the slice of the rows of `matrix` from index `start` to index `stop - 1`, much like `Array.prototype.slice()`.

### `getTopRow(matrix)`

Returns the top row of `matrix` as a matrix.

### `getAllButTopRow(matrix)`

Returns `matrix` without the top row.

### `getBottomRow(matrix)`

Returns the bottom row of `matrix` as a matrix.

### `getAllButBottomRow(matrix)`

Returns `matrix` without the bottom row.

### `getMiddleRows(matrix)`

Returns `matrix` without top and bottom rows.

### `flipRows(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/matrixShift.js)

Returns `matrix` with the rows in reverse order. 

## Column Utilities [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/matrixSlice.js)

### `sliceMatrixCols(matrix, start, stop)`

Returns the slice of the columns of `matrix` from index `start` to index `stop - 1`, much like `Array.prototype.slice()`.

### `getLeftCol(matrix)`

Returns the left column of `matrix` as a matrix.

### `getRightCol(matrix)`

Returns the right column of `matrix as a matrix.

### `getAllButLeftCol(matrix)`

Returns `matrix` without the left column.

### `getAllButRightCol(matrix)`

Returns `matrix` without the right column.

### `getMiddleCols(matrix)`

Returns `matrix` without the left and right columns.

### `flipCols(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/matrixShift.js)

Returns `matrix` with the columns in reverse order.

## Matrix Utilities

### `transpose(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/transpose.js)

Returns `matrix` with the rows and the columns flipped, i.e. the leftmost column is now the top row (and vice versa), and so on.

### `getMinorDiagonals(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/getDiagonals.js)

Returns an nArray (an array of arrays, not necessarily of equal length) of the minor diagonals of `matrix`, starting from the top-left corner, down to the bottom-right corner.

### `getMajorDiagonals(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/getDiagonals.js)

Returns an nArray (an array of arrays, not necessarily of equal length) of the major diagonals of `matrix`, starting from the bottom-left corner, up to the top-right corner.

### `getClockwiseSpiral(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/getSpiral.js)

Returns an array of the entries of `matrix` going clockwise from the top-left corner, spiraling into the center.

### `getCounterClockwiseSpiral(matrix)` [<>](https://github.com/trainorpj/matrix-magic/blob/master/src/getSpiral.js)

Returns an array of entries of `matrix` going counter-clockwise from the top-left corner, spiraling into the center.

## Decorators [<>]((https://github.com/trainorpj/matrix-magic/blob/master/src/matrixDecorators.js))

### `doColumnOperation(fcn)(matrix, ...args)`

`doColumnOperation(fcn)` returns a function that transposes `matrix`, applies `fcn`, and then returns the resulting transpose.

This utility allows us to use row utilities on the columns.  The definition is

```js
const doColumnOperation = fcn => (mtx, ...args) => {
  return transpose(fcn(transpose(mtx), ...args));
};
```

### `doMatrixCheck(fcn)(nArray, ...args)`

`doMatrixCheck(fcn)` returns a function that evaluates `fcn(nArray, ...args)` if `nArray` is a matrix.  If `nArray` is not a matrix, it will throw an error.

### `matrixWrapper(fcn)(nArray, ...args)`

`matrixWrapper(fcn)` returns a function that evaluates `fcn(nArray, ...args)` pending several checks.  Those checks are:
* Check if it is the empty matrix `[[]]`
* Check if it is a matrix with `doMatrixCheck`




# About

This library has no dependencies and consists of entirely pure functions. I mostly did this because I thought it would be fun (and it is!), and to learn about unit testing with jest.

If you'd like to contribute, then by all means, go ahead! Here are ways you can help out:

* Make snippets like the ones I made above to show what each function is doing.
* Contribute to the documentation! Describe what each function does (related to providing examples).
* Write a test! This would be a big help, and would be a great way to get into testing if you have yet to try it (and you *should* be testing your code).
* Re-write a test.  Just because it's there doesn't mean it's a good test.
* Make a pull request for a new feature.  This might be a little harder, as I'd like to adhere to a purely functional style.  Talk to me if you're interested in adding something.
* Find and report bugs!

# matrix-fun

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

It also provides some utilties to work with matrices:

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
## About

This library has no dependencies and consists of entirely pure functions. I mostly did this because I thought it would be fun (and it is!), and to learn about unit testing with jest.

If you'd like to contribute, then by all means, go ahead! Here are ways you can help out:

* Make snippets like the ones I made above to show what each function is doing.
* Contribute to the documentation! Describe what each function does (related to providing examples).
* Write a test! This would be a big help, and would be a great way to get into testing if you have yet to try it (and you *should* be testing your code).
* Re-write a test.  Just because it's there doesn't mean it's a good test.
* Make a pull request for a new feature.  This might be a little harder, as I'd like to adhere to a purely functional style.  Talk to me if you're interested in adding something.
* Find and report bugs!
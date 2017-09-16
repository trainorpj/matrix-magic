// Gets first element in array
export const getFirstElement = arr => arr[0];

// Gets all but first element in array
export const getAllButFirstElement = arr => arr.slice(1);

// Gets last element in array
export const getLastElement = arr => arr[arr.length - 1];

// Gets all but the last element in array
export const getAllButLastElement = arr => arr.slice(0, arr.length - 1);

// Gets middle elements in array
export const getMiddleElements = arr => arr.slice(1, arr.length - 1);

// Given an nArray, it filters out empty arrays
export const filterOutEmptyArrays = nArray =>
  nArray.filter(arr => arr.length > 0);

export const flattenArray = nArray =>
  nArray.reduce((acc, cur) => acc.concat(cur), []);

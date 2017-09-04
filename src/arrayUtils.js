// Gets first element in array
const getFirstElmt = arr => arr[0];

// Gets all but first element in array
const getAllButFirstElmt = arr => arr.slice(1);

// Gets last element in array
const getLastElmt = arr => arr[arr.length - 1];

// Gets all but the last element in array
const getAllButLastElmt = arr => arr.slice(0, arr.length - 1);

// Gets middle elements in array
const getMiddleElmts = arr => arr.slice(1, arr.length - 1);

// Given an nArray, it filters out empty arrays
const filterOutEmptyArrays = nArray => nArray.filter(arr => arr.length > 0);

const flattenArray = nArray => nArray.reduce((acc, cur) => acc.concat(cur), []);

module.exports = {
  getFirstElmt,
  getAllButFirstElmt,
  getLastElmt,
  getAllButLastElmt,
  getMiddleElmts,
  filterOutEmptyArrays,
  flattenArray
};

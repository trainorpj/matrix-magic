"use strict";

// Gets first element in array
var getFirstElmt = function getFirstElmt(arr) {
  return arr[0];
};

// Gets all but first element in array
var getAllButFirstElmt = function getAllButFirstElmt(arr) {
  return arr.slice(1);
};

// Gets last element in array
var getLastElmt = function getLastElmt(arr) {
  return arr[arr.length - 1];
};

// Gets all but the last element in array
var getAllButLastElmt = function getAllButLastElmt(arr) {
  return arr.slice(0, arr.length - 1);
};

// Gets middle elements in array
var getMiddleElmts = function getMiddleElmts(arr) {
  return arr.slice(1, arr.length - 1);
};

// Given an nArray, it filters out empty arrays
var filterOutEmptyArrays = function filterOutEmptyArrays(nArray) {
  return nArray.filter(function (arr) {
    return arr.length > 0;
  });
};

var flattenArray = function flattenArray(nArray) {
  return nArray.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, []);
};

module.exports = {
  getFirstElmt: getFirstElmt,
  getAllButFirstElmt: getAllButFirstElmt,
  getLastElmt: getLastElmt,
  getAllButLastElmt: getAllButLastElmt,
  getMiddleElmts: getMiddleElmts,
  filterOutEmptyArrays: filterOutEmptyArrays,
  flattenArray: flattenArray
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Gets first element in array
var getFirstElement = exports.getFirstElement = function getFirstElement(arr) {
  return arr[0];
};

// Gets all but first element in array
var getAllButFirstElement = exports.getAllButFirstElement = function getAllButFirstElement(arr) {
  return arr.slice(1);
};

// Gets last element in array
var getLastElement = exports.getLastElement = function getLastElement(arr) {
  return arr[arr.length - 1];
};

// Gets all but the last element in array
var getAllButLastElement = exports.getAllButLastElement = function getAllButLastElement(arr) {
  return arr.slice(0, arr.length - 1);
};

// Gets middle elements in array
var getMiddleElements = exports.getMiddleElements = function getMiddleElements(arr) {
  return arr.slice(1, arr.length - 1);
};

// Given an nArray, it filters out empty arrays
var filterOutEmptyArrays = exports.filterOutEmptyArrays = function filterOutEmptyArrays(nArray) {
  return nArray.filter(function (arr) {
    return arr.length > 0;
  });
};

var flattenArray = exports.flattenArray = function flattenArray(nArray) {
  return nArray.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, []);
};
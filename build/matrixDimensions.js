"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Get height of matrix
var getMatrixHeight = exports.getMatrixHeight = function getMatrixHeight(mtx) {
  return mtx.length;
};

// Get width of matrix
var getMatrixWidth = exports.getMatrixWidth = function getMatrixWidth(mtx) {
  return mtx.length > 0 ? mtx[0].length : 0;
};

// Get matrix width and height
// return {width, height} object
var getMatrixDimensions = exports.getMatrixDimensions = function getMatrixDimensions(mtx) {
  var height = getMatrixHeight(mtx);
  var width = getMatrixWidth(mtx);

  return { width: width, height: height };
};
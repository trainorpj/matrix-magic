"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipCols = exports.flipRows = undefined;

var _matrixDecorators = require("./matrixDecorators");

var flipRows = exports.flipRows = function flipRows(mtx) {
  return mtx.slice().reverse();
};

var flipCols = exports.flipCols = (0, _matrixDecorators.doColumnOperation)(flipRows);
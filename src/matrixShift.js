import { doColumnOperation } from "./matrixDecorators";

export const flipRows = mtx => mtx.slice().reverse();

export const flipCols = doColumnOperation(flipRows);

/**
 * @module 1-liners/fold
 *
 * @description
 *
 * Same as [`array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reduce).
 *
 * @example
 *
 * 	const fold = require('1-liners/fold');
 *
 * 	fold(sum, 8, [1, 2, 3]); // => 2
 *
 */
export default (fold, initial, arr) => arr.reduce(fold, initial);

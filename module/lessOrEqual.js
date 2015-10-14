/**
 * @module 1-liners/lessOrEqual
 *
 * @description
 *
 * Same as `a <= b`.
 *
 * @example
 *
 * 	const lessOrEqual = require('1-liners/lessOrEqual');
 *
 * 	lessOrEqual(1, 2); // => true
 * 	lessOrEqual(1, 1); // => true
 * 	lessOrEqual(2, 1); // => false
 *
 */
export default (x, y) => x <= y;

/**
 * @module 1-liners/xor
 *
 * @description
 *
 * Same as `(x && !y) || (!x && y)`
 *
 * @example
 *
 * 	var xor = require('1-liners/xor');
 *
 * 	xor(0, 1); // => 1
 * 	xor(1, 1); // => 0
 *
 */
export default (x, y) => (x && !y) || (!x && y)

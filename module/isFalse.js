/**
 * @module 1-liners/isFalse
 *
 * @description
 *
 * Same as `x === false`.
 *
 * @example
 *
 * 	const isFalse = require('1-liners/isFalse');
 *
 * 	isFalse(false);  // => true
 *
 * 	isFalse('yes');  // => false
 * 	isFalse(true);   // => false
 * 	isFalse([]);     // => false
 * 	isFalse('');     // => false
 * 	isFalse(0);      // => false
 *
 */
export default (x) => x === false;

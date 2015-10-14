/**
 * @module 1-liners/isTrue
 *
 * @description
 *
 * Same as `x === true`.
 *
 * @example
 *
 * 	const isTrue = require('1-liners/isTrue');
 *
 * 	isTrue(true);   // => true
 *
 * 	isTrue('yes');  // => false
 * 	isTrue([]);     // => false
 * 	isTrue('');     // => false
 * 	isTrue(0);      // => false
 * 	isTrue(false);  // => false
 *
 */
export default (x) => x === true;

/**
 * @module 1-liners/isFalsy
 *
 * @description
 *
 * Same as `!`.
 *
 * @example
 *
 * 	const isFalsy = require('1-liners/isFalsy');
 *
 * 	isFalsy('yes');  // => false
 * 	isFalsy(true);   // => false
 * 	isFalsy([]);     // => false
 *
 * 	isFalsy('');     // => true
 * 	isFalsy(0);      // => true
 * 	isFalsy(false);  // => true
 *
 */
export default (x) => !x;

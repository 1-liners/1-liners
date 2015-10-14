/**
 * @module 1-liners/equal
 * 
 * @description
 *
 * Same as `a === b`.
 * 
 * @example
 * 
 * 	const equal = require('1-liners/equal');
 * 
 * 	equal(true, true); // => true
 * 	equal(false, true); // => false
 * 	equal(1, true); // => false
 * 
 */
export default (x, y) => x === y;

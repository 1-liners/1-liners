/**
 * @module 1-liners/and
 * 
 * @description
 *
 * Same as `a && b`.
 * 
 * @example
 * 
 * 	const and = require('1-liners/and');
 * 
 * 	and(true, true); // => true
 * 	and(false, true); // => false
 * 
 */
export default (x, y) => x && y;

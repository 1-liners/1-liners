/**
 * @module 1-liners/and
 * 
 * Same as `a && b`.
 * 
 * @example
 * 
 * 	var and = require('1-liners/and');
 * 
 * 	and(true, true); // => true
 * 	and(false, true); // => false
 * 
 **/
export default (x, y) => x && y;

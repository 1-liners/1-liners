/**
 * @module 1-liners/or
 * 
 * @description
 *
 * Same as `a || b`.
 * 
 * @example
 * 
 * 	const or = require('1-liners/or');
 * 
 * 	or(true, true); // => true
 * 	or(false, true); // => true
 * 	or(false, false); // => false
 * 
 */
export default (a, b) => a || b;

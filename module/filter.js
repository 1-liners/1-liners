/**
 * @module 1-liners/filter
 * 
 * @description
 *
 * Same as `[1, 2, 3].filter(isOdd)`.
 * 
 * @example
 * 
 * 	const filter = require('1-liners/filter');
 * 
 * 	filter(isOdd, [1, 2, 3]); // => [1, 3]
 * 
 */
export default (filter, arr) => arr.filter(filter);

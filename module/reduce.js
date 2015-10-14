/**
 * @module 1-liners/reduce
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduce(sum)`.
 * 
 * @example
 * 
 * 	const reduce = require('1-liners/reduce');
 * 
 * 	reduce(sum, [1, 2, 3]); // => 6
 * 
 */
export default (reduce, arr) => arr.reduce(reduce);

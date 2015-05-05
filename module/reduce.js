/**
 * @module 1-liners/reduce
 * 
 * @desc Same as `[1, 2, 3].reduce(sum)`.
 * 
 * @example
 * 
 * 	var reduce = require('1-liners/reduce');
 * 
 * 	reduce(sum, [1, 2, 3]); // => 6
 * 
 */
export default (reduce, arr) => arr.reduce(reduce);

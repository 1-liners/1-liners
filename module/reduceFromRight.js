/**
 * @module 1-liners/reduceFromRight
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduceFromRight(sub, 1)`.
 * 
 * @example
 * 
 * 	var reduceFromRight = require('1-liners/reduceFromRight');
 * 
 * 	reduceFromRight(sub, 1, [1, 2, 3]); // => -5
 * 
 */
export default (reduce, initial, arr) => arr.reduceRight(reduce, initial);

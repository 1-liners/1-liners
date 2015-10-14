/**
 * @module 1-liners/reduceRight
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduceRight(sub)`.
 * 
 * @example
 * 
 * 	const reduceRight = require('1-liners/reduceRight');
 * 
 * 	reduceRight(sub, [1, 2, 3]); // => -4
 * 
 */
export default (reduce, arr) => arr.reduceRight(reduce);

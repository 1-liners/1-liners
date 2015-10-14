/**
 * @module 1-liners/foldRight
 *
 * @description
 *
 * Same as [`array.reduceRight`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reduceRight).
 *
 * @example
 *
 * 	const foldRight = require('1-liners/foldRight');
 *
 * 	foldRight(sub, 1, [1, 2, 3]); // => -5
 *
 */
export default (fold, initial, arr) => arr.reduceRight(fold, initial);

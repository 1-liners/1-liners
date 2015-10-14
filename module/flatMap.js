/**
 * @module 1-liners/flatMap
 * 
 * @description
 *
 * Map a function over a collection and flatten the result by one-level.
 * 
 * @example
 * 
 * 	const flatMap = require('1-liners/flatMap');
 * 
 * 	flatMap((x) => [x, x], [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
 * 
 */
export default (fn, array) => [].concat.apply([], array.map(fn));

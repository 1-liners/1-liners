/**
 * @module 1-liners/sum
 *
 * @description
 *
 * Sums all items of an `array`.
 *
 * @example
 *
 * 	const sum = require('1-liners/sum');
 *
 * 	sum([1, 2, 3]);        // => 6
 * 	sum([]);               // => 0
 *
 */
export default (array) => array.reduce((a, b) => (a + b), 0);

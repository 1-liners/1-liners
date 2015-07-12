/**
 * @module 1-liners/average
 *
 * @description
 *
 * Returns the average of all items of an `array`.
 *
 * @example
 *
 * 	const average = require('1-liners/average');
 *
 * 	average([2, 3, 4]);        // => 3
 * 	average([]);               // => NaN
 *
 */
export default (array) => array.reduce((a, b) => (a + b), 0) / array.length;

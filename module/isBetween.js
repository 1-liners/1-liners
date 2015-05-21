/**
 * @module 1-liners/isBetween
 *
 * @description
 *
 * Return `number` if it’s greater than `min` and lower than `max`. Else return `min` or `max` respectively.
 *
 * @example
 *
 * 	var isBetween = require('1-liners/isBetween');
 *
 * 	isBetween(1, 10, 2.5);  // => true
 * 	isBetween(1, 10, -5);   // => false
 * 	isBetween(1, 10, 25);   // => false
 *
 */
export default (min, max, number) => (min <= number && number <= max);

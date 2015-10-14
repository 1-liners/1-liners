/**
 * @module 1-liners/isBetween
 *
 * @description
 *
 * Check if the `number` lies between `min` and `max`, inclusive.
 *
 * @example
 *
 * 	const isBetween = require('1-liners/isBetween');
 *
 * 	isBetween(1, 10, 2.5);  // => true
 * 	isBetween(1, 10, -5);   // => false
 * 	isBetween(1, 10, 25);   // => false
 *
 */
export default (min, max, number) => (min <= number && number <= max);

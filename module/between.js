/**
 * @module 1-liners/between
 *
 * @description
 *
 * Return `number` if it’s greater than `min` and lower than `max`. Else return `min` or `max` respectively.
 *
 * @example
 *
 * 	const between = require('1-liners/between');
 *
 * 	between(1, 10, 2.5);  // => 2.5
 * 	between(1, 10, -5);   // => 1
 * 	between(1, 10, 25);   // => 10
 *
 */
export default (min, max, number) => (number < min ? min : (number > max ? max : number));

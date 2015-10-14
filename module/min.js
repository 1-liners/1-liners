/**
 * @module 1-liners/min
 * 
 * @description
 *
 * Same as `Math.min` – but with a stable number of arguments.
 * 
 * @example
 * 
 * 	const min = require('1-liners/min');
 * 
 * 	min(3, 6);  // => 3
 * 
 * 	[3, 6, 1].reduce(min);       // => 1
 * 	[3, 6, 1].reduce(Math.min);  // => NaN
 * 
 */
export default (a, b) => ((a > b) ? b : a);

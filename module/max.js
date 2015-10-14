/**
 * @module 1-liners/max
 * 
 * @description
 *
 * Same as `Math.max` – but with a stable number of arguments.
 * 
 * @example
 * 
 * 	const max = require('1-liners/max');
 * 
 * 	max(3, 6);  // => 6
 * 
 * 	[3, 6, 9].reduce(max);       // => 9
 * 	[3, 6, 9].reduce(Math.max);  // => NaN
 * 
 */
export default (a, b) => ((a > b) ? a : b);

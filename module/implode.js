/**
 * @module 1-liners/implode
 * 
 * @description
 *
 * Collapse a list of arguments into an array of arguments.
 * 
 * @example
 * 
 * 	const implode = require('1-liners/implode');
 * 
 * 	const f = (a, b) => a + b;
 * 
 * 	[
 * 		[1, 2],
 * 		[3, 4],
 * 		[5, 6],
 * 	].map(implode(f));  // => [3, 7, 11]
 * 
 */
export default (func) => (args) => func(...args);

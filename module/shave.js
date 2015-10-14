/**
 * @module 1-liners/shave
 * 
 * @description
 *
 * Shave ensures that a function is called with n arguments.
 * 
 * @example
 * 
 * 	const shave = require('1-liners/shave');
 * 
 * 	map(parseInt, [0, 1.1, 2.2]); // => [0, NaN, NaN]
 * 	map(shave(1, parseInt), [0, 1.1, 2.2]); // => [0, 1, 2]
 * 
 */
export default (shave, f) => (...args) => f(...(args.slice(0, shave)));

/**
 * @module 1-liners/flip
 * 
 * @description
 *
 * Flip a function’s arguments.
 * 
 * @example
 * 
 * 	const flip = require('1-liners/flip');
 * 
 * 	const f = (a, b) => a / b;
 * 
 * 	flip(f)(2, 6);        // => 3
 * 	flip(flip(f))(6, 2);  // => 3
 * 
 */
export default (f) => (...args) => f(...args.reverse());

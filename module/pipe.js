/**
 * @module 1-liners/pipe
 * 
 * @description
 *
 * Pipe arguments through functions.
 * 
 * @example
 * 
 * 	const pipe = require('1-liners/pipe');
 * 
 * 	pipe(f, g)(1, 2) === g(f(1, 2));
 * 
 */
export default (f, g) => (...args) => g(f(...args));

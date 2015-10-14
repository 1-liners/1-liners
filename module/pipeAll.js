/**
 * @module 1-liners/pipeAll
 * 
 * @description
 *
 * Pipe arguments through an array of functions.
 * 
 * @example
 * 
 * 	const pipeAll = require('1-liners/pipeAll');
 * 
 * 	pipeAll([f, g, h])(1, 2) === h(g(f(1, 2)));
 * 
 */
export default (fns) => fns.reverse().reduce( (f, g) => (...args) => f(g(...args)) );

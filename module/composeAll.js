/**
 * @module 1-liners/composeAll
 * 
 * @description
 *
 * Compose a new function with a given array of functions.
 * 
 * @example
 * 
 * 	const composeAll = require('1-liners/composeAll');
 * 
 * 	composeAll([f, g, h])(1, 2) === f(g(h(1, 2)));
 * 
 */
export default (fns) => fns.reduce( (f, g) => (...args) => f(g(...args)) );

/**
 * @module 1-liners/converge
 *
 * @description
 *
 * Converge two functions into one.
 *
 * @example
 *
 * 	const converge = require('1-liners/converge');
 *
 * 	converge(f, g, h)(1, 2) === f(g(1, 2), h(1, 2));
 *
 */
export default (f, g, h) => (...args) => f(g(...args), h(...args));

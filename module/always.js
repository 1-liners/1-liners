/**
 * @module 1-liners/always
 *
 * @description
 *
 * Creates a function that always returns a given value
 *
 * @example
 *
 * 	var always = require('1-liners/always');
 *
 * 	var T = always(true);
 * 	T(); // => true
 * 	T(); // => true
 *
 * 	var fortyTwo = always(42);
 * 	fortyTwo(); // => 42
 * 	fortyTwo(); // => 42
 *
 */
export default val => () => val;

/**
 * @module 1-liners/always
 *
 * @description
 *
 * Creates a function that always returns a given value
 *
 * @example
 *
 * 	const always = require('1-liners/always');
 *
 * 	const T = always(true);
 * 	T(); // => true
 * 	T(); // => true
 *
 * 	const fortyTwo = always(42);
 * 	fortyTwo(); // => 42
 * 	fortyTwo(); // => 42
 *
 */
export default val => () => val;

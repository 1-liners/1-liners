/**
 * @module 1-liners/drop
 *
 * @description
 *
 * Returns the suffix of `array` after dropping the first `n` elements
 *
 * @example
 *
 * 	const drop = require('1-liners/drop');
 *
 * 	const array = [1, 2, 3, 4, 5];
 *  const string = 'Hello World';
 * 
 * 	drop(2, array);  // => [3, 4, 5]
 * 	drop(6, string); // => 'World'
 *
 */
export default (n, array) => array.slice(Math.max(n, 0), Infinity);
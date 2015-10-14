/**
 * @module 1-liners/drop
 *
 * @description
 *
 * Returns the tail of `array` after dropping the first `n` elements.
 * Use this in place of String's `.substr(startIndex)` and `.substring(startIndex)`
 *
 * @example
 *
 * 	const drop = require('1-liners/drop');
 *
 * 	const array = [1, 2, 3, 4, 5];
 * 	const string = 'Hello World';
 *
 * 	drop(2, array);  // => [3, 4, 5]
 * 	drop(6, string); // => 'World'
 *
 */
export default (n, array) => array.slice(Math.max(n, 0), Infinity);

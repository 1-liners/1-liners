/**
 * @module 1-liners/startsWith
 *
 * @description
 *
 * Same as [`str.startsWith(searchString)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith).
 *
 * @example
 *
 * 	const startsWith = require('1-liners/startsWith');
 *
 * 	startsWith('1', '1-liners');  // => true
 * 	startsWith('stoeffel', 'nope');  // => false
 *
 */
export default (searchString, str) => str.startsWith(searchString);

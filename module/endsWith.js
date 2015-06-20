/**
 * @module 1-liners/endsWith
 *
 * @description
 *
 * Same as [`str.endsWith(searchString)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith).
 *
 * @example
 *
 * 	const endsWith = require('1-liners/endsWith');
 *
 * 	endsWith('liners', '1-liners');  // => true
 * 	endsWith('stoeffel', 'nope');  // => false
 *
 */
export default (searchString, str) => str.endsWith(searchString);

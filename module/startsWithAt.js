/**
 * @module 1-liners/startsWithAt
 *
 * @description
 *
 * Same as [`str.startsWith(searchString, position)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith).
 *
 * @example
 *
 * 	const startsWithAt = require('1-liners/startsWithAt');
 *
 * 	startsWithAt(2, 'liners', '1-liners/startsWithAt');  // => true
 * 	startsWithAt(2, 'stoeffel', 'nope');  // => false
 *
 */
export default (position, searchString, str) => str.startsWith(searchString, position);

/**
 * @module 1-liners/endsWithAt
 *
 * @description
 *
 * Same as [`str.endsWith(searchString, position)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith).
 *
 * @example
 *
 * 	const endsWithAt = require('1-liners/endsWithAt');
 *
 * 	endsWithAt(8, 'liners', '1-liners/endsWithAt');  // => true
 * 	endsWithAt(2, 'stoeffel', 'nope');  // => false
 *
 */
export default (position, searchString, str) => str.endsWith(searchString, position);

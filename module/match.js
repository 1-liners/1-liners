/**
 * @module 1-liners/match
 *
 * @description
 *
 * Same as `haystack.match(needle)`.
 *
 * @example
 *
 * 	const match = require('1-liners/match');
 *
 * 	match(/\d+/g, 'Items: 3,2'); // => ["3", "2"]
 *
 */
export default (needle, haystack) => haystack.match(needle);

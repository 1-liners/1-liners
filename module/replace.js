/**
 * @module 1-liners/replace
 *
 * @description
 *
 * Same as `haystack.replace(needle, replace)`.
 *
 * @example
 *
 * 	const replace = require('1-liners/replace');
 *
 * 	replace(/\d+/g, sub => `"${sub}"`, 'Items: 3,2'); // => Items: "3","2"
 * 	replace(':', '=', 'Items: 3,2'); // => Items= 3,2
 *
 */
export default (needle, replace, haystack) => haystack.replace(needle, replace);

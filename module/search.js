/**
 * @module 1-liners/search
 *
 * @description
 *
 * Same as `'STR'.search(regexp)`.
 *
 * @example
 *
 * 	const search = require('1-liners/search');
 *
 * 	search(/s/, 'super') // => 0
 *
 */
export default (regexp, str) => str.search(regexp);

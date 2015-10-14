/**
 * @module 1-liners/codePointAt
 * 
 * @description
 *
 * Same as `'STR'.codePointAt(0)`.
 * 
 * @example
 * 
 * 	const codePointAt = require('1-liners/codePointAt');
 * 
 * 	codePointAt(0, 'super') // => 115
 * 
 */
export default (index, str) => str.codePointAt(index);
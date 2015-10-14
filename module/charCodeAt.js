/**
 * @module 1-liners/charCodeAt
 * 
 * @description
 *
 * Same as `'STR'.charCodeAt(0)`.
 * 
 * @example
 * 
 * 	const charCodeAt = require('1-liners/charCodeAt');
 * 
 * 	charCodeAt(0, 'super') // => 115
 * 
 */
export default (index, str) => str.charCodeAt(index);
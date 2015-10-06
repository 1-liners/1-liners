/**
 * @module 1-liners/substr
 * 
 * @description
 *
 * Same as `'string'.substr(2)`.
 * 
 * @example
 * 
 * 	var substr = require('1-liners/substr');
 * 
 * 	substr(4, 'one fish') // => 'fish'
 * 
 */
export default (startIndex, str) => str.substr(startIndex);
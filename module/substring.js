/**
 * @module 1-liners/substring
 * 
 * @description
 *
 * Same as `'string'.substring(2)`.
 * 
 * @example
 * 
 * 	var substring = require('1-liners/substring');
 * 
 * 	substring(4, 'red fish') // => 'fish'
 * 
 */
export default (startIndex, str) => str.substring(startIndex);
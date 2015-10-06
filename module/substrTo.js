/**
 * @module 1-liners/substrTo
 * 
 * @description
 *
 * Same as `'string'.substrTo(2,1)`.
 * 
 * @example
 * 
 * 	var substrTo = require('1-liners/substrTo');
 * 
 * 	substrTo(0, 3, 'two fish') // => 'two'
 * 
 */
export default (startIndex, len, str) => str.substr(startIndex, len);
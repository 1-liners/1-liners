/**
 * @module 1-liners/substringTo
 * 
 * @description
 *
 * Same as `'string'.substringTo(2,1)`.
 * 
 * @example
 * 
 * 	var substringTo = require('1-liners/substringTo');
 * 
 * 	substringTo(0, 4, 'blue fish') // => 'blue'
 * 
 */
export default (startIndex, endIndex, str) => str.substring(startIndex, endIndex);
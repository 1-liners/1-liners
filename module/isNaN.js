/**
 * @module 1-liners/isNaN
 * 
 * @description
 *
 * Check if the number is NaN
 * Same as https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 * @example
 * 
 * 	var isNaN = require('1-liners/isNaN');
 * 
 *  isNaN(23);  // => false
 *  isNaN(Infinity);  // => false
 *  isNaN(NaN);  // => true
 */
export default (value) => value !== value;

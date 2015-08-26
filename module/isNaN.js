/**
 * @module 1-liners/isNaN
 * 
 * @description
 *
 * Check if the number is NaN
 * 
 * @example
 * 
 * 	var isNaN = require('1-liners/isNaN');
 * 
 *  isNaN(23);  // => false
 *  isNaN(Infinity);  // => false
 *  isNaN(NaN);  // => true
 */
export default (value) => value !== value;
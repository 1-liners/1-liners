/**
 * @module 1-liners/isFinite
 * 
 * @description
 *
 * Check if the number is finite
 * 
 * @example
 * 
 * 	var isFinite = require('1-liners/isFinite');
 * 
 *  isFinite(23);  // => true
 *  isFinite(Infinity);  // => false
 *  isFinite(NaN);  // => true
 *  isFinite(-44);  // => true
 */
export default (value) => value.toString() !== 'Infinity';


/**
 * @module 1-liners/castArray
 *
 * @description
 *
 * If the provided `value` is an array returns a copy of it otherwise returns an array containing the original `value`.
 *
 * @example
 *
 * 	const castArray = require('1-liners/castArray');
 *
 * 	castArray([1, 2, 3]);  // => [1, 2, 3]
 * 	castArray(1);  				 // => [1]
 * 	castArray(null);  	   // => [null]
 *
 */
export default (value) => Array.isArray(value) ? value.slice(0) : [value];

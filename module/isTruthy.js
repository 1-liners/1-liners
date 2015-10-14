/**
 * @module 1-liners/isTruthy
 * 
 * @description
 *
 * Same as `!!`.
 * 
 * @example
 * 
 * 	const isTruthy = require('1-liners/isTruthy');
 * 
 * 	isTruthy('yes');  // => true
 * 	isTruthy(true);   // => true
 * 	isTruthy([]);     // => true
 * 
 * 	isTruthy('');     // => false
 * 	isTruthy(0);      // => false
 * 	isTruthy(false);  // => false
 * 
 */
export default (x) => !!x;

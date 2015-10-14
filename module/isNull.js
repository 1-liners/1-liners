/**
 * @module 1-liners/isNull
 *
 * @description
 *
 * Same as `=== null`.
 *
 * @example
 *
 * 	const isNull = require('1-liners/isNull');
 *
 * 	isNull(null);             // => true
 *
 * 	isNull(undefined);        // => false
 * 	isNull(NaN);              // => false
 * 	isNull('anything else');  // => false
 *
 */
export default (value) => (value === null);

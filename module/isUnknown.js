/**
 * @module 1-liners/isUnknown
 *
 * @description
 *
 * Same as `== null`.
 *
 * @example
 *
 * 	var isUnknown = require('1-liners/isUnknown');
 *
 * 	isUnknown(null);             // => true
 * 	isUnknown(undefined);        // => true
 *
 * 	isUnknown(false);            // => false
 * 	isUnknown('');               // => false
 * 	isUnknown(NaN);              // => false
 * 	isUnknown(/anything else/);  // => false
 *
 */
export default (value) => (value == null);

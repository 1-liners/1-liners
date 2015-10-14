/**
 * @module 1-liners/isUndefined
 *
 * @description
 *
 * Returns `true` if a value or reference is `undefined`.
 *
 * @example
 *
 * 	const isUndefined = require('1-liners/isUndefined');
 *
 * 	isUndefined(undefined);        // => true
 *
 * 	isUndefined(null);             // => false
 * 	isUndefined(false);            // => false
 * 	isUndefined(NaN);              // => false
 * 	isUndefined('anything else');  // => false
 *
 */
export default (value) => (value === void 0);

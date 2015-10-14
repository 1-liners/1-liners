/**
 * @module 1-liners/isObject
 *
 * @description
 *
 * Same as `value !== null && typeof value === 'object'`.
 *
 * @example
 *
 * 	const isObject = require('1-liners/isObject');
 *
 * 	isObject({});               // => true
 * 	isObject([]);               // => true
 * 	isObject(/anything/);       // => true
 *
 * 	isObject(null);             // => false
 * 	isObject('anything else');  // => false
 *
 */
export default (value) => (value !== null && typeof value === 'object');

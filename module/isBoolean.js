/**
 * @module 1-liners/isBoolean
 *
 * @description
 *
 * Same as `typeof value === 'boolean'`.
 *
 * @example
 *
 * 	const isBoolean = require('1-liners/isBoolean');
 *
 * 	isBoolean(false);            // => true
 * 	isBoolean(true);             // => true
 *
 * 	isBoolean(null);             // => false
 * 	isBoolean(/anything else/);  // => false
 *
 */
export default (value) => typeof value === 'boolean';

/**
 * @module 1-liners/isString
 *
 * @description
 *
 * Same as `typeof value === 'string'`.
 *
 * @example
 *
 * 	const isString = require('1-liners/isString');
 *
 * 	isString('');               // => true
 * 	isString('anything');       // => true
 *
 * 	isString(/anything else/);  // => false
 *
 */
export default (value) => typeof value === 'string';

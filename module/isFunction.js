/**
 * @module 1-liners/isFunction
 *
 * @description
 *
 * Same as `typeof value === 'function'`.
 *
 * @example
 *
 * 	const isFunction = require('1-liners/isFunction');
 *
 * 	isFunction(function() {});        // => true
 * 	isFunction(function named() {});  // => true
 *
 * 	isFunction('any other value');    // => false
 *
 */
export default (value) => typeof value === 'function';

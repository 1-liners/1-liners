/**
 * @module 1-liners/hasOwnProperty
 *
 * @description
 *
 * Same as [`obj.hasOwnProperty(prop)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).
 *
 * @example
 *
 * 	const hasOwnProperty = require('1-liners/hasOwnProperty');
 *
 * 	hasOwnProperty('a', {a: 1, b: 2});  // => true
 * 	hasOwnProperty('c', {a: 1, b: 2});  // => false
 *
 */
export default (prop, obj) => obj.hasOwnProperty(prop);

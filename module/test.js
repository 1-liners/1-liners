/**
 * @module 1-liners/test
 *
 * @description
 *
 * Same as [`regexObj.test(str)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test).
 *
 * @example
 *
 * 	const test = require('1-liners/test');
 * 	const haystack = 'hAyHAYhayneEdLEHayHAy';
 *
 * 	test(haystack, /needle/);   // => false
 * 	test(haystack, /needle/i);  // => true
 *
 */
export default (str, regexObj) => regexObj.test(str);

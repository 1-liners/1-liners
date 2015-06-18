/**
 * @module 1-liners/exec
 *
 * @description
 *
 * Same as [`regexObj.exec(str)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec).
 *
 * @example
 *
 * 	const exec = require('1-liners/exec');
 * 	const haystack = 'hAyHAYhayneEdLEHayHAy';
 *
 * 	exec(haystack, /needle/i);  // => ['neEdLE']
 * 	exec(haystack, /n(.+)e/i);  // => ['neEdLE', 'eEdL']
 * 	exec(haystack, /needle/);   // => null
 *
 */
export default (str, regexObj) => regexObj.exec(str);

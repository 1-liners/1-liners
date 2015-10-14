/**
 * @module 1-liners/push
 *
 * @description
 *
 * Same as [push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) but immutable.
 *
 * @example
 *
 * 	const push = require('1-liners/push');
 *
 * 	push(4, [1, 2, 3]); // => [1, 2, 3, 4]
 *
 */
export default (element, arr) => [...arr, element];

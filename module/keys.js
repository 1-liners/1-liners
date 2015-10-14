/**
 * @module 1-liners/keys
 *
 * @description
 *
 * Same as [`Object.keys(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).
 *
 * @example
 *
 * 	const keys = require('1-liners/keys');
 *
 * 	keys({ 100: 'a', 2: 'b', 7: 'c' }); // => ['2', '7', '100']
 * 	keys([1, 2, 3]); // => [0, 1, 2]
 */
export default (obj) => Object.keys(obj);

/**
 * @module 1-liners/concat
 *
 * @description
 *
 * Returns a copy of `array` with `values` or `value` appended at the end. Same as [`array.concat(values)` or `array.concat(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).
 *
 * @example
 *
 * 	const concat = require('1-liners/concat');
 *
 * 	concat(['c', 'd'], ['a', 'b']);  // => ['a', 'b', 'c', 'd']
 * 	concat(['c'], ['a', 'b']);       // => ['a', 'b', 'c']
 * 	concat('c', ['a', 'b']);         // => ['a', 'b', 'c']
 *
 */
export default (values, array) => array.concat(values);

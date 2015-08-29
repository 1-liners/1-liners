/**
 * @module 1-liners/plus
 *
 * @description
 *
 * Same as `a + b`.
 *
 * @example
 *
 * 	var plus = require('1-liners/plus');
 *
 * 	plus(2, 8);      // => 10
 * 	plus(1, 2, 3);   // => 6
 * 	plus('a', 'b');  // => 'ab'
 *
 */
export default (a, b, ...c) => [b, ...c].reduce((x, y) => (x + y), a);

/**
 * @module 1-liners/signum
 *
 * @description
 *
 * Returns the [sign of a number](https://en.wikipedia.org/wiki/Signum_function). `1` if `n` is positive, `-1` if `n` is negative and `0` if `n` is `0`. Otherwise returns `NaN`.
 *
 * @example
 *
 * 	const signum = require('1-liners/signum');
 *
 * 	signum(-5);         // => -1
 * 	signum(-Infinity);  // => -1
 *
 * 	signum(10);         // => 1
 * 	signum(Infinity);   // => 1
 *
 * 	signum(0);          // => 0
 * 	signum(-0);         // => 0
 *
 */
export default (n) => (n === 0 ? 0 : (n > 0 ? 1 : (n < 0 ? -1 : NaN)));

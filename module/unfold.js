/**
 * @module 1-liners/unfold
 *
 * @description
 *
 * Builds a list from a seed value.
 *
 * @example
 *
 * 	const unfold = require('1-liners/unfold');
 *
 * const fn = n => n < 20 ?  [n, n + 1] : false;
 * unfold(fn, 10); // => [10,11,12,13,14,15,16,17,18,19]
 *
 * // range in terms of unfold
 * const range = (from, to) => unfold((seed) => seed < to ? [seed, seed + 1] : false, from);
 * range(1, 10); // => [1,2,3,4,5,6,7,8,9]
 */
export default function unfold (fn, seed, acc = [], next = fn(seed)) { return next ? unfold(fn, next[1], [...acc, next[0]]) : acc }

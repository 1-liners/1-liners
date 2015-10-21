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
 *
 * // unnest in terms of unfold
 * const unnest = xs => unfold((seed) => seed < xs.length ? [xs[seed], seed + 1] : false , 0);
 * unnest([[1, 2], [3, 4], [5, 6]]); // => [1,2,3,4,5,6]
 *
 */
export default function unfold (fn, seed, acc = []) { return fn(seed) ? unfold(fn, fn(seed)[1], acc.concat.apply(acc, [fn(seed)[0]])) : acc }

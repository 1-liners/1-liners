/**
 * @module 1-liners/zip
 *
 * @description
 *
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @example
 *
 * const zip = require('1-liners/zip');
 * zip(['a', 'b'], [1, 2], [true, false]) // => [['a', 1, true], ['b', 2, false]]
 *
 */
export default (...arrays) => Array.from({ length: Math.max(...arrays.map(a => a.length)) }).map((_, i) => arrays.map(a => a[i]));

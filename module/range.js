/**
 * @module 1-liners/range
 *
 * @description
 *
 * A pure function to generate a range of numbers
 * from start(including) to end(excluding)
 * @example
 *
 * const range = require('1-liners/range');
 *
 * range(1, 5); // => [1, 2, 3, 4, 5]
 *
 */
export default (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

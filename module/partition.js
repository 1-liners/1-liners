/**
 * @module 1-liners/partition
 *
 * @description
 *
 * Creates an array of elements split into two groups, the first of which contains elements `predicate` returns truthy for,
 * the second of which contains elements `predicate` returns falsey for. The predicate is invoked with one argument: `(value)`.
 *
 * @example
 *
 * const partition = require('1-liners/partition');
 *
 * const [even, odd] = partition([1, 2, 3, 4], n => n % 2 === 0); // => even: [2, 4], odd: [1, 3]
 */
export default (array, predicate) => array.reduce((result, item) => (result[Number(!predicate(item))].push(item), result), [[], []]);

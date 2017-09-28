/**
 * @module 1-liners/uniq
 *
 * @description
 *
 * Creates a duplicate-free version of an array.
 *
 * @example
 *
 * const uniq = require('1-liners/uniq');
 *
 * uniq([1, 2, 2]); // => [1, 2]
 *
 */
export default (array) => array.filter((value, index, self) => index === self.findIndex(other => other === value));

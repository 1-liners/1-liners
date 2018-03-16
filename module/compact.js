/**
 * @module 1-liners/compact
 *
 * @description
 *
 * A pure function to make a list compact and remove falsey values
 * @example
 *
 * const compact = require('1-liners/compact');
 *
 * compact([1, 2, false, 45]); // => [1, 2, 45]
 *
 */

export default arr => arr.filter(a => a === 0 || !!a);

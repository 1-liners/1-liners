/**
 * @module 1-liners/findKey
 *
 * @description
 *
 * A pure function to find key from object, matching a predicate
 * similar to https://lodash.com/docs/4.17.4#findKey or Array.findIndex()
 *
 * @example
 *
 * const findKey = require('1-liners/findKey');
 *
 * const data = { a: 1, b: 2, c: 3 };
 * findKey((x) => x > 2, data); // => 'c'
 *
 */
export default (fn, obj) => Object.keys(obj).find(k => fn(obj[k]));

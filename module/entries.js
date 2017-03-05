/**
 * @module 1-liners/entries
 *
 * @description
 *
 * Returns an array of a given object's own enumerable property [key, value] pairs
 * Same as `Object.keys(obj).map(key => [key, obj[key]])`.
 *
 * @example
 *
 * 	const entries = require('1-liners/entries');
 *
 * 	entries({ foo: 'bar', baz: 42 }); // => [ ['foo', 'bar'], ['baz', 42] ]
 * 	entries(['foo', 'bar', 'baz']); // => [ [0, 'foo'], [1, 'bar'], [2, 'baz'] ]
 * 	entries({ foo: 'bar', [Symbol('baz')]: 42 }); // => [ ['foo', 'bar'] ]
 * 	entries('foo'); // => [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
 */
export default (obj) => Object.keys(obj).map(key => [key, obj[key]]);

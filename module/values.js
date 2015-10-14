/**
 * @module 1-liners/values
 *
 * @description
 *
 * Get all values of an object
 * Same as `Object.keys(obj).map(i => obj[i])`.
 *
 * @example
 *
 * 	const values = require('1-liners/values');
 *
 * 	values({ 100: 'a', 2: 'b', 7: 'c' }); // => ['a', 'b', 'c']
 * 	values(['a', 'b', 'c']); // => ['a', 'b', 'c']
 */
export default (obj) => Object.keys(obj).map(i => obj[i]);

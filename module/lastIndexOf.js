/**
 * @module 1-liners/lastIndexOf
 * 
 * @description
 *
 * Same as `'wow'.lastIndexOf('w')`.
 * 
 * @example
 * 
 * 	const lastIndexOf = require('1-liners/lastIndexOf');
 * 
 * 	lastIndexOf('f', 'waffle') // => 3
 * 
 */
export default (searchValue, str) => str.lastIndexOf(searchValue);
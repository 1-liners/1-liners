/**
 * @module 1-liners/indexOf
 * 
 * @description
 *
 * Same as `'str'.indexOf('t')`.
 * 
 * @example
 * 
 * 	const indexOf = require('1-liners/indexOf');
 * 
 * 	indexOf('a', 'hallo') // => 1
 * 
 */
export default (searchValue, str) => str.indexOf(searchValue);
/**
 * @module 1-liners/slice
 * 
 * @description
 *
 * Same as `'1-liners'.slice(2,4)` or `[1,2,3,4].slice(1,3)` 
 * Use in place of `'1-liners'.substring(2,6)`
 * 
 * @example
 * 
 * 	const slice = require('1-liners/slice');
 * 
 * 	slice(2, 6, '1-liners'); // => 'line'
 * 	slice(1, 3, [1,2,3,4]); // => [2,3]
 * 
 */
export default (startIndex, endIndex, arg) => arg.slice(Math.max(startIndex, 0), endIndex);
/**
 * @module 1-liners/split
 * 
 * @description
 *
 * Same as `'1-liners'.split('-')`
 * 
 * @example
 * 
 * 	const split = require('1-liners/split');
 * 
 * 	split('-', '1-liners'); // => [1, 'liners']
 * 
 */
export default (split, str) => str.split(split);

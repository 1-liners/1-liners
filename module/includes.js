/**
 * @module 1-liners/includes
 *
 * @description
 *
 * Same as `'Blue Whale'.includes('blue')`.
 *
 * @example
 *
 * 	const includes = require('1-liners/includes');
 *
 * 	includes('blue', 'Blue Whale') // => false
 *
 */
export default (searchString, str) => str.includes(searchString);

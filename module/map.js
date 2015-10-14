/**
 * @module 1-liners/map
 * 
 * @description
 *
 * Same as `[1, 2, 3].map(Math.sqrt)`.
 * 
 * @example
 * 
 * 	const map = require('1-liners/map');
 * 
 * 	map(Math.sqrt, [9, 25]); // => [3, 5]
 * 
 */
export default (map, arr) => arr.map(map);

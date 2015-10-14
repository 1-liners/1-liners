/**
 * @module 1-liners/take
 * 
 * @description
 *
 * Take n items of an array. Same as `arr.slice(0, n)`.
 * 
 * @example
 * 
 * 	const take = require('1-liners/take');
 * 
 * 	take(2, [1, 2, 3]); // => [1, 2]
 * 
 */
export default (take, arr) => arr.slice(0, take);

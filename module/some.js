/**
 * @module 1-liners/some
 * 
 * @description
 *
 * Same as `[1,2,3].some(GreaterThan16)`
 * 
 * @example
 * 
 * 	const some = require('1-liners/some');
 * 
 * 	some(elem => elem > 16, [16,17,18]); // => true
 * 
 */
export default (some, arr) => arr.some(some);

/**
 * @module 1-liners/every
 * 
 * @description
 *
 * Same as `[1,2,3].every(GreaterThan16)`.
 * 
 * @example
 * 
 * 	const every = require('1-liners/every');
 * 
 * 	every(elem => elem > 16, [16,17,18]); // => false
 * 
 */
export default (every, arr) => arr.every(every);

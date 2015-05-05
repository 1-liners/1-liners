/**
 * @module 1-liners/nor
 * 
 * Same as `!(a || b)`.
 * 
 * @example
 * 
 * 	var nor = require('1-liners/nor');
 * 
 * 	nor(0, 0); // => true
 * 	nor(1, 0); // => false
 * 
 */
export default (x, y) => !(x || y);

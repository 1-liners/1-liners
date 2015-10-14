/**
 * @module 1-liners/nand
 * 
 * @description
 *
 * Same as `!(a && b)`.
 * 
 * @example
 * 
 * 	const nand = require('1-liners/nand');
 * 
 * 	nand(0, 0); // => true
 * 	nand(1, 1); // => false
 * 
 */
export default (x, y) => !(x && y);

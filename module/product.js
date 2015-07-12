/**
 * @module 1-liners/product
 *
 * @description
 *
 * Returns the product of all items of an `array`.
 *
 * @example
 *
 * 	const product = require('1-liners/product');
 *
 * 	product([2, 3, 4]);        // => 24
 * 	product([]);               // => 1
 *
 */
export default (array) => array.reduce((a, b) => (a * b), 1);

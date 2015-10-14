/**
 * @module 1-liners/explode
 * 
 * @description
 *
 * The opposite of [implode](#implode).
 * 
 * @example
 * 
 * 	const explode = require('1-liners/explode');
 * 
 * 	const sum = (numbers) => numbers.reduce((a, b) => a + b);
 * 
 * 	explode(sum)(1, 2, 3, 4);  // => 10
 * 
 */
export default (func) => (...args) => func(args);

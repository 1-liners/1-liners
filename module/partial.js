/**
 * @module 1-liners/partial
 * 
 * @description
 *
 * Partially apply a function.
 * 
 * @example
 * 
 * 	const partial = require('1-liners/partial');
 * 
 * 	const add = (a, b, c) => a + b + c;
 * 
 *  const fivePlus = (add, 2, 3);
 *
 *  fivePlus(4) === 9
 */
export default (f, ...args) => (...moreArgs) => f(...args, ...moreArgs);

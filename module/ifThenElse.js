/**
 * @module 1-liners/ifThenElse
 *
 * @description
 *
 * Creates a function which calls `then` if the `predicate` is true
 * and `otherwise` if the `predicate` is false.
 *
 * @example
 *
 * 	let ifThenElse = require('1-liners/ifThenElse');
 *
 * 	let eq = (a, b) => a === b;
 * 	let add = (a, b) => a + b;
 * 	let sub = (a, b) => a - b;
 *
 * 	let addIfEq = ifThenElse(eq, add, sub);
 *
 * 	addIfEq(1, 1); // => 2
 * 	addIfEq(2, 1); // => 1
 *
 */
export default (predicate, then, otherwise) => (...args) => predicate(...args) ? then(...args) : otherwise(...args);

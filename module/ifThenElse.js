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
 * 	const ifThenElse = require('1-liners/ifThenElse');
 *
 * 	const eq = (a, b) => a === b;
 * 	const add = (a, b) => a + b;
 * 	const sub = (a, b) => a - b;
 *
 * 	const addIfEq = ifThenElse(eq, add, sub);
 *
 * 	addIfEq(1, 1); // => 2
 * 	addIfEq(2, 1); // => 1
 *
 */
export default (predicate, then, otherwise) => (...args) => predicate(...args) ? then(...args) : otherwise(...args);

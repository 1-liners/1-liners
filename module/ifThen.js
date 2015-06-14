/**
 * @module 1-liners/ifThen
 *
 * @description
 *
 * Creates a function which calls `then` if the `predicate` is true
 * and returns `undefined` if the `predicate` is false.
 *
 * @example
 *
 * 	let ifThen = require('1-liners/ifThen');
 *
 * 	let eq = (a, b) => a === b;
 * 	let add = (a, b) => a + b;
 * 	let sub = (a, b) => a - b;
 *
 * 	let words = ifThen((str) => typeof str === 'string', (str) => str.split(' '));
 *
 * 	words('Hello ES2015'); // => ['Hello', 'ES2015']
 *
 */
export default (perdicate, then) => (...args) => perdicate(...args) ? then(...args) : undefined;

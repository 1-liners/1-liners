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
 * 	const ifThen = require('1-liners/ifThen');
 *
 * 	const eq = (a, b) => a === b;
 * 	const add = (a, b) => a + b;
 * 	const sub = (a, b) => a - b;
 *
 * 	const words = ifThen((str) => typeof str === 'string', (str) => str.split(' '));
 *
 * 	words('Hello ES2015'); // => ['Hello', 'ES2015']
 *
 */
export default (perdicate, then) => (...args) => perdicate(...args) ? then(...args) : undefined;

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
 * 	const words = ifThen((str) => typeof str === 'string', (str) => str.split(' '));
 *
 * 	words('Hello ES2015'); // => ['Hello', 'ES2015']
 *     words(['Hello', 'ES2015']); // => undefined
 *
 */
export default (predicate, then) => (...args) => predicate(...args) ? then(...args) : undefined;

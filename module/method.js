/**
 * @module 1-liners/method
 *
 * @description
 *
 * Same as `object[method](...args)`
 *
 * @example
 *
 * 	const method = require('1-liners/method');
 *
 * 	const object = {
 * 		base: 1,
 * 		add(number) { return this.base + number; },
 * 	};
 *
 * 	method('add', object)(5);  // => 6
 *
 */
export default (method, object) => (...args) => object[method](...args);

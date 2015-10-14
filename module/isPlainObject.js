/**
 * @module 1-liners/isPlainObject
 *
 * @description
 *
 * Checks if an object inherits directly from `null` or `Object.prototype` – like an object literal (`{...}`) does.
 *
 * Heads up! This function is [not supported on IE 10 and below](https://babeljs.io/docs/usage/caveats/).
 *
 * @example
 *
 * 	const isPlainObject = require('1-liners/isPlainObject');
 *
 * 	isPlainObject({});                   // => true
 * 	isPlainObject(Object.create(null));  // => true
 *
 * 	isPlainObject(null);                 // => false
 * 	isPlainObject([]);                   // => false
 * 	isPlainObject(/anything else/);      // => false
 *
 */
export default (value) => (value && typeof value === 'object' && (value.__proto__ == null || value.__proto__ === Object.prototype));

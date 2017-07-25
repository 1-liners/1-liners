/**
 * @module 1-liners/get
 *
 * @description
 *
 * Gets the value at path of object.
 *
 * @example
 *
 * 	const get = require('1-liners/get');
 *
 *  let obj = { a: { b: 42 } };
 *  get('a.b', obj); // => 42
 *
 */
export default (path, obj) => path.split('.').reduce((acc, current) => acc && acc[current], obj);

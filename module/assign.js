/**
 * @module 1-liners/assign
 *
 * @description
 *
 * Returns a new object and assigns `assign` to `object`.
 *
 * @example
 *
 * 	const assign = require('1-liners/assign');
 *
 * 	const yedi = { id: 1, age: 100 };
 *
 * 	assign({ name: 'Yoda', age: 900 }, yedi);  // => { id: 1, name: 'Yoda', 900 }
 *
 */
export default (assign, object) => ({ ...object, ...assign });

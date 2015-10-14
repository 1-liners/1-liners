/**
 * @module 1-liners/isTypeOf
 *
 * @description
 *
 * Same as `typeof value === TYPE`.
 *
 * @example
 *
 * 	const isTypeOf = require('1-liners/isTypeOf');
 *
 * 	isTypeOf('boolean', false);            // => true
 * 	isTypeOf('boolean', true);             // => true
 *
 * 	isTypeOf('boolean', null);             // => false
 * 	isTypeOf('boolean', /anything else/);  // => false
 *
 */
export default (type, value) => typeof value === type;

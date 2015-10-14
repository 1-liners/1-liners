/**
 * @module 1-liners/isNumber
 *
 * @description
 *
 * Same as `typeof value === 'number'`. Use [`Number.isFinite`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) instead if you want to filter out `NaN` and `Infinity`.
 *
 * @example
 *
 * 	const isNumber = require('1-liners/isNumber');
 *
 * 	isNumber(1);                // => true
 * 	isNumber(3.14);             // => true
 * 	isNumber(NaN);              // => true
 * 	isNumber(Infinity);         // => true
 *
 * 	isNumber('3.14');           // => false
 * 	isNumber(/anything else/);  // => false
 *
 */
export default (value) => typeof value === 'number';

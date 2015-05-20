/**
 * @module 1-liners/shift
 *
 * @description
 *
 * Similar to `array.shift()`, but immutable.
 *
 * @example
 *
 * 	import shift from '1-liners/shift';
 *
 * 	const array = [1, 2, 3];
 *
 * 	shift(array);  // => [2, 3]
 * 	array;         // => [1, 2, 3]
 *
 */
export default (array) => array.slice(1);

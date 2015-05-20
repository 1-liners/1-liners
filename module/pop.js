/**
 * @module 1-liners/pop
 *
 * @description
 *
 * Similar to `array.pop()`, but immutable.
 *
 * @example
 *
 * 	import pop from '1-liners/pop';
 *
 * 	const array = [1, 2, 3];
 *
 * 	pop(array);  // => [1, 2]
 * 	array;       // => [1, 2, 3]
 *
 */
export default (array) => array.slice(0, -1);

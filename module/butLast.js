/**
 * @module 1-liners/butLast
 *
 * @description
 *
 * Return a copy of `array`, without the last item.
 *
 * @example
 *
 * 	import butLast from '1-liners/butLast';
 *
 * 	const array = [1, 2, 3];
 *
 * 	butLast(array);  // => [1, 2]
 * 	array;           // => [1, 2, 3]
 *
 */
export default (array) => array.slice(0, -1);

/**
 * @module 1-liners/shallowClone
 *
 * @description
 *
 * Copy all properties of an object into a new plain object.
 *
 * @example
 *
 * 	import shallowClone from '1-liners/shallowClone';
 *
 * 	const source = {
 * 		value: 'value',
 * 		reference: /reference/,
 * 	};
 * 	const target = shallowClone(source);
 *
 * 	target === source                      // => false
 * 	target.value === source.value          // => true
 * 	target.reference === source.reference  // => true
 *
 */
export default (object) => Object.assign({}, object);

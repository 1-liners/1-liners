/**
 * @module 1-liners/pick
 *
 * @description
 *
 * Copies only specified `properties` from an `object` into a new object.
 *
 * @example
 *
 * 	const pick = require('1-liners/pick');
 *
 * 	const object = {foo: 1, bar: 2, baz: 3};
 *
 * 	pick(['foo', 'baz'], object);  // => {foo: 1, baz: 3}
 *
 */
export default (properties, object) => Object.assign({}, ...properties.map(key => ({[key]: object[key]})));

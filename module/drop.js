/**
 * @module 1-liners/drop
 *
 * @description
 *
 * Creates a copy of the `object` without the given `props`.
 *
 * @example
 *
 * 	const drop = require('1-liners/drop');
 *
 * 	const object = {foo: 1, bar: 2, baz: 3};
 *
 * 	drop(['foo', 'baz'], object);  // => {bar: 2}
 * 	object;                        // => {foo: 1, bar: 2, baz: 3}
 *
 */
export default (props, object) => Object.keys(object).reduce((result, key) => Object.assign(result, props.includes(key) ? null : {[key]: object[key]}), {});

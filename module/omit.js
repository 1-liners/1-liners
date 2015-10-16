/**
 * @module 1-liners/omit
 *
 * @description
 *
 * Creates a copy of the `object` without the given `props`.
 *
 * @example
 *
 * 	const omit = require('1-liners/omit');
 *
 * 	const object = {foo: 1, bar: 2, baz: 3};
 *
 * 	omit(['foo', 'baz'], object);  // => {bar: 2}
 *
 *
 */
export default (props, obj) => props.reduce((newObj, val) => (({ [val]: dropped, ...rest }) => rest)(newObj), obj);

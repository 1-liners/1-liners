/**
 * @module 1-liners/extend
 *
 * @description
 *
 * Returns a copy of `object`, extended by `extension`.
 *
 * @example
 *
 * 	const extend = require('1-liners/extend');
 *
 * 	const object = {id: 1};
 *
 * 	extend({ name: 'stoeffel' }, object);  // => { id: 1, name: 'stoeffel' }
 *
 */
export default (extension, object) => Object.assign({}, object, extension);

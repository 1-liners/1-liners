/**
 * @module 1-liners/normalize
 *
 * @description
 *
 * Same as `'STR'.normalize()`.
 *
 * @example
 *
 * 	const normalize = require('1-liners/normalize');
 *
 * 	normalize('NFD', '\u1E9B\u0323') // => ẛ̣
 *
 */
export default (form, str) => str.normalize(form);

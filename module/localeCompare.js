/**
 * @module 1-liners/localeCompare
 *
 * @description
 *
 * Same as `'A'.localeCompare('B')`.
 *
 * @example
 *
 * 	const localeCompare = require('1-liners/localeCompare');
 *
 * 	localeCompare('B', 'A') // => -1
 *
 */
export default (compareString, str) => str.localeCompare(compareString);

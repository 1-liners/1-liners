/**
 * @module 1-liners/truncate
 *
 * @description
 *
 * Truncate string when longer than maxLength and add the Unicode Character horizontal ellipsis keeping the total within maxLength.
 *
 * @example
 *
 * 	const truncate = require('1-liners/truncate');
 *
 * 	truncate('super', 5) // => super
 * 	truncate('super', 4) // => sup…
 *
 */
export default (str, maxLength) => str.length > maxLength ? `${str.substr(0, maxLength - 1)}…` : str

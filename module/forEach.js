/**
 * @module 1-liners/forEach
 *
 * @description
 *
 * Same as `[1, 2, 3].forEach(Math.sqrt)`.
 *
 * @example
 *
 * 	const forEach = require('1-liners/forEach');
 *
 * 	forEach(i => console.log('Item: ' + i), [9, 25]); // => logs "Item: 9" and "Item: 25"
 *
 */
export default (forEach, arr) => arr.forEach(forEach);

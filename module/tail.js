/**
 * @module 1-liners/tail
 *
 * @description
 *
 * Returns the tail of an array
 *
 * @example
 *
 * 	const tail = require('1-liners/tail');
 *
 * 	tail([1, 2, 3]); // => [2, 3]
 *
 */
export default ([,...tail]) => tail;

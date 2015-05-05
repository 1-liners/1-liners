/**
 * @module 1-liners/tail
 * 
 * @desc Returns the tail of an array
 * 
 * @example
 *
 *   var tail = require('1-liners/tail');
 *   
 *   tail([1, 2, 3]); // => [2, 3]
 * 
 */
export default (arr) => arr.slice(1);

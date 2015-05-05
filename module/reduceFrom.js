/**
 * @module 1-liners/reduceFrom
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduceFrom(sum, 8)`.
 * 
 * @example
 * 
 * 	var reduceFrom = require('1-liners/reduceFrom');
 * 
 * 	reduceFrom(sum, 8, [1, 2, 3]); // => 2
 * 
 */
export default (reduce, initial, arr) => arr.reduce(reduce, initial);

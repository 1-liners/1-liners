/**
 * @module 1-liners/identity
 *
 * @description
 *
 * Returns the value you pass to the function
 *
 * @example
 *
 * 	const identity = require('1-liners/identity');
 *
 * 	identity(true); // => true
 * 	identity(1); // => 1
 * 	identity({ foo: 1 }); // => { foo: 1 }
 * 	identity("1-liners"); // => "1-liners"
 *
 */
export default I => I;

/**
 * @module 1-liners/bind
 *
 * @description
 *
 * Binds a context to a function. Same as [`fun.bind(thisArg[, arg1[, arg2[, ...]]])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
 *
 * @example
 *
 * 	const bind = require('1-liners/bind');
 *
 * 	setTimeout(bind(console, ['Hello'], console.log), 2000); // => 'Hello' (after 2s)
 *
 */
export default (thisArg, args, fun) => fun.bind(thisArg, ...args);

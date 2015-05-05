/**
 * @module 1-liners/noop
 * 
 * Same as `function(){}`.
 * 
 * @example
 * 
 * 	var noop = require('1-liners/noop');
 * 
 * 	window.console = {
 * 			log: noop,
 * 			error: noop,
 * 			warn: noop,
 * 			table: noop
 * 	};
 * 
 **/
export default () => {};

/**
 * @module 1-liners/noop
 * 
 * @description
 *
 * Same as `function(){}`.
 * 
 * @example
 * 
 * 	const noop = require('1-liners/noop');
 * 
 * 	window.console = {
 * 			log: noop,
 * 			error: noop,
 * 			warn: noop,
 * 			table: noop
 * 	};
 * 
 */
export default () => {};

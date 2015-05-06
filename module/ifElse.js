/**
 * @module 1-liners/ifElse
 * 
 * @description
 *
 * Creates a function which calls the first function if the predicate is true
 * and the second function if the predicate is false.
 * 
 * @example
 * 
 * 	let ifElse = require('1-liners/ifElse');
 * 
 * 	let eq = (a, b) => a === b;
 * 	let add = (a, b) => a + b;
 * 	let sub = (a, b) => a - b;
 * 
 * 	let addIfEq = ifElse(eq, add, sub);
 * 
 * 	addIfEq(1, 1); // => 2
 * 	addIfEq(2, 1); // => 1
 * 
 * 	let words = ifElse((str) => typeof str === 'string', (str) => str.split(' '));
 * 
 * 	words('Hello ES2015'); // => ['Hello', 'ES2015']
 * 
 */
export default (pred, ifDo, elseDo=()=>{}) => (...args) => pred(...args) ? ifDo(...args) : elseDo(...args);

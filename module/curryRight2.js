/**
 * @module 1-liners/curryRight2
 * 
 * @description
 *
 * Curry a function from the right – split its parameters into 2 lists. Apply the second list of parameters first, without changing the order within the lists.
 * 
 * @example
 * 
 * 	const curryRight2 = require('1-liners/curryRight2');
 * 
 * 	const g = (a, b, c, d) => a + b * c - d;
 * 	g(1, 2, 3, 4);  // => 3
 * 
 * 	const gλ = curryRight2(g);
 * 	gλ(4)(1, 2, 3);  // => 3
 * 	gλ(3, 4)(1, 2);  // => 3
 * 	gλ(2, 3, 4)(1);  // => 3
 * 
 */
export default (f) => (...a) => (...b) => f(...b, ...a);

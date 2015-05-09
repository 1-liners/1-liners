/**
 * @module 1-liners/curryRight
 *
 * @description
 *
 * Curry a function from the right – split its parameters into 2 lists. Apply the second list of parameters first, without changing the order within the lists.
 *
 * @example
 *
 * 	import curryRight from '1-liners/curryRight';
 *
 * 	const g = (a, b, c, d) => a + b * c - d;
 * 	g(1, 2, 3, 4);  // => 3
 *
 * 	const gλ = curryRight(g);
 * 	gλ(4)(1, 2, 3);  // => 3
 * 	gλ(3, 4)(1, 2);  // => 3
 * 	gλ(2, 3, 4)(1);  // => 3
 *
 */
export default (f) => (...a) => (...b) => f(...b, ...a);

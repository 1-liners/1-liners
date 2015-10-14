/**
 * @module 1-liners/uncurry
 *
 * @description
 *
 * Uncurry a function – collapse 2 lists of parameters into one.
 *
 * @example
 *
 * 	import uncurry from '1-liners/uncurry';
 *
 * 	const f = (a) => (b) => a + b;
 * 	const fβ = uncurry(f);
 * 	fβ(1, 2);  // => 3
 *
 * 	const g = (a) => (b, c) => a + b + c
 * 	const gβ = uncurry(g);
 * 	gβ(1, 2, 3);  // => 6
 *
 */
export default (f) => (a, ...rest) => f(a)(...rest);

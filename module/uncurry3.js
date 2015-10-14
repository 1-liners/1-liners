/**
 * @module 1-liners/uncurry3
 *
 * @description
 *
 * Uncurry a function – collapse 3 lists of parameters into one.
 *
 * @example
 *
 * 	import uncurry3 from '1-liners/uncurry3';
 *
 * 	const f = (a) => (b) => (c) => a + b + c;
 * 	const fβ = uncurry3(f);
 * 	fβ(1, 2, 3);  // => 6
 *
 * 	const g = (a) => (b) => (c, d) => a + b + c + d;
 * 	const gβ = uncurry3(g);
 * 	gβ(1, 2, 3, 4);  // => 10
 *
 */
export default (f) => (a, b, ...rest) => f(a)(b)(...rest);

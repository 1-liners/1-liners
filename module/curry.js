/**
 * @module 1-liners/curry
 *
 * @description
 *
 * Curry a function – split its list of parameters into 2 lists.
 *
 * @example
 *
 * 	import curry from '1-liners/curry';
 * 	import reduce from '1-liners/reduce';
 * 	import compose from '1-liners/compose';
 *
 * 	// You can use reduce and compose to create curry3,4 and so on.
 * 	const curry3 = compose(curry, curry);
 * 	const curry4 = reduce(compose, [curry, curry, curry]);
 *
 * 	const f = (a, b, c, d) => a * b * c * d;
 * 	const fβ = curry(f);  // ~= curry2
 * 	const fγ = curry3(f); // ~= curry3
 * 	const fδ = curry4(f); // ~= curry4
 *
 * 	f(1, 2, 3, 4)  === 24
 *
 * 	fβ(1)(2, 3, 4) === 24
 * 	fβ(1, 2)(3, 4) === 24
 * 	fβ(1, 2, 3)(4) === 24
 *
 * 	fγ(1)(2)(3, 4) === 24
 * 	fγ(1)(2, 3)(4) === 24
 *
 * 	fδ(1)(2)(3)(4) === 24
 *
 */
export default (f) => (...a) => (...b) => f(...a, ...b);

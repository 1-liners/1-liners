/**
 * @module 1-liners/takeUntil
 * 
 * @description
 *
 * Take items of an array until they fulfill a predicate.
 * 
 * @example
 * 
 * 	const takeUntil = require('1-liners/takeUntil');
 * 
 * 	takeUntil(i => i % 2 === 1, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
 * 
 */
export default (pred, arr) => arr.reduce((newArr, i) => { if (pred(i)) arr.length = 0; else newArr.push(i); return newArr; }, []);

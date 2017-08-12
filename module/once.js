/**
 * @module 1-liners/once
 *
 * @description
 *
 * Creates a function that is restricted to invoking passed function once.
 *
 * @example
 *
 * const once = require('1-liners/once');
 * let count = 0;
 * let countOnce = once(() => ++count);
 * countOnce(); // => 1, (count = 1)
 * countOnce(); // => 1, (count = 1)
 *
 */
export default (fn) => ((first = true) => () => first ? (first = !first, fn = fn()) : fn)();

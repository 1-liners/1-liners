/**
 * @module 1-liners/once
 *
 * @description
 *
 * Creates a function that is restricted to invoking func once.
 *
 * @example
 *
 * const once = require('1-liners/once');
 * let count = 0;
 * let countOnce = _.once(() => ++count);
 * countOnce(); // => 1, (count = 1)
 * countOnce(); // => 1, (count = 1)
 *
 */
export default (fn) => (c => () => c ? (c = !c, fn = fn()) : fn).bind(null, 1)();

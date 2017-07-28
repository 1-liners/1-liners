/**
 * @module 1-liners/uniqBy
 *
 * @description
 *
 * Remove duplicates from an array of objects by invoking `iteratee` for each object.
 *
 * @example
 *
 * const get = require('1-liners/uniqBy');
 *
 * let array = [{ id: 1 }, { id: 2 }, { id: 1 }];
 * uniqBy(array, o => o.id); // => [{ id: 1 }, { id: 2 }]
 *
 */
export default (array, iteratee) => array.filter((value, index, self) => index === self.findIndex(other => iteratee(other) === iteratee(value)));

/**
 * @module 1-liners/keyBy
 *
 * @description
 *
 * Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`.
 *
 * @example
 *
 * const keyBy = require('1-liners/keyBy');
 * const array = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}];
 * const dict = keyBy(array, o => o.id); // => {1: {id: 1, name: 'One'}, 2: {id: 2, name: 'Two'} }
 *
 */
export default (array, iteratee) => array.reduce((result, item) => (result[iteratee(item)] = item, result), {});

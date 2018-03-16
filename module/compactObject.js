/**
 * @module 1-liners/compactObject
 *
 * @description
 *
 * A pure function to make a object compact and remove falsey values
 * @example
 *
 * const compactObject = require('1-liners/compactObject');
 *
 * compactObject({value: 'ebvk', fgs: undefined,}); // => {value: 'ebvk'}
 *
 */

export default (obj) => Object.keys(obj).reduce((acc, a) => Object.assign(acc, !!obj[a] ? {[a]: obj[a]} : {}), {});

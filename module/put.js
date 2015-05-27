/**
 * @module 1-liners/put
 *
 * @description
 *
 * Same as `Object.assign({}, obj, {[key]: val})`
 *
 * @example
 *
 * 	const put = require('1-liners/put');
 *
 * 	const object = {id: 1};
 *
 * 	put('name', 'stoeffel', object);  // => { id: 1, name: 'stoeffel' }
 *
 */
export default (key, val, obj) => Object.assign({}, obj, {[key]: val});

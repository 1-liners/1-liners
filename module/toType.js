/**
 * @module 1-liners/toType
 *
 * @description
 *
 * typeOf is a function that return the true type of a variable.
 *
 * @example
 *
 * 	import toType from '1-liners/toType';
 *
 *  toType({a: 4}); //"object"
 *  toType([1, 2, 3]); //"array"
 *  (function() {console.log(toType(arguments))})(); //arguments
 *  toType(new ReferenceError); //"error"
 *  toType(new Date); //"date"
 *  toType(/a-z/); //"regexp"
 *  toType(Math); //"math"
 *  toType(JSON); //"json"
 *  toType(new Number(4)); //"number"
 *  toType(new String("abc")); //"string"
 *  toType(new Boolean(true)); //"boolean"
 */
export default (obj) => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

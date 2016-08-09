/**
 * @module 1-liners/isPrototypeOf
 *
 * @description
 *
 * Check if an object's prototype exists in another object's prototype chain
 *
 * @example
 *
 * function Foo(){};
 * function Bar(){};
 *
 * Bar.prototype = new Foo();
 *
 * const foo = new Foo();
 * const bar = new Bar();
 *
 * Foo.prototype.isPrototypeOf(bar); // => true
 * Bar.prototype.isPrototypeOf(foo); // => false
 *
 */

export default (prototypeObj, obj) => prototypeObj.prototype.isPrototypeOf(obj)

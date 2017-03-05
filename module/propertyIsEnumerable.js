/**
 * @module 1-liners/propertyIsEnumerable
 *
 * @description
 *
 * Returns a Boolean indicating whether the specified property is enumerable.
 *
 * @example
 *
 * const FOO = {
 *  'bar' : 'bar'
 * }
 * FOO.propertyIsEnumerable('bar') // => true
 * FOO.propertyIsEnumerable('length') // => false
 *
 */
export default (obj, property) => obj.propertyIsEnumerable(property)

/**
 * @module 1-liners/combine
 *
 * @description
 *
 * Splits a string (Splitchars: _, -, \s, ., or camelcase) and combines it using a combound function.
 * This is usefull to create functions like `camelize`, `dasherize`...
 *
 * @example
 *
 * 	var combine = require('1-liners/combine');
 * 	var curry = require('1-liners/curry');
 *
 *  const camelize = curry(combine)((a, b) => a + b.toUpperCase());
 *  const dasherize = curry(combine)((a, b) => `${a}-${b}`);
 *
 *  camelize('hello-world');   // => "helloWorld"
 *  camelize('hello_world');   // => "helloWorld"
 *  camelize('hello.world');   // => "helloWorld"
 *  camelize('hello - world'); // => "helloWorld"
 *  camelize('hello + world'); // => "hello + world"
 *  dasherize('hello world'); // => "hello-world"
 *  dasherize('helloWorld'); // => "hello-world"
 *
 */
export default (combine, str) => str.replace(/(\w[_-\s\.]+\w|[a-z][A-Z])/g, sub => combine(sub.slice(0,1), sub.slice(-1)));

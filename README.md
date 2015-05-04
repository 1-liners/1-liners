# 1-liners

[![Join the chat at https://gitter.im/stoeffel/1-liners](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/stoeffel/1-liners?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://coveralls.io/repos/stoeffel/1-liners/badge.svg?branch=master)](https://coveralls.io/r/stoeffel/1-liners?branch=master) [![Build Status](https://travis-ci.org/stoeffel/1-liners.svg?branch=master)](https://travis-ci.org/stoeffel/1-liners) [![Dependency Status](https://david-dm.org/stoeffel/1-liners.svg)](https://david-dm.org/stoeffel/1-liners) [![npm version](https://badge.fury.io/js/1-liners.svg)](http://badge.fury.io/js/1-liners)

> Useful oneliners and shorthand functions

PRs are welcome!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Usage](#usage)
  - [Install](#install)
  - [Usage in es5](#usage-in-es5)
  - [Using in es6](#using-in-es6)
- [API](#api)
  - [length](#length)
  - [head](#head)
  - [tail](#tail)
  - [take](#take)
  - [takeWhile](#takewhile)
  - [takeUntil](#takeuntil)
  - [nth](#nth)
  - [equal](#equal)
  - [looseEqual](#looseequal)
  - [and](#and)
  - [or](#or)
  - [not](#not)
  - [nor](#nor)
  - [nand](#nand)
  - [bitAnd](#bitand)
  - [bitOr](#bitor)
  - [xor](#xor)
  - [min](#min)
  - [max](#max)
  - [inc](#inc)
  - [dec](#dec)
  - [compose](#compose)
  - [pipe](#pipe)
  - [shave](#shave)
  - [curry2,3,4](#curry234)
  - [curryRight2](#curryright2)
  - [uncurry2,3,4](#uncurry234)
  - [flip](#flip)
  - [implode](#implode)
  - [explode](#explode)
  - [noop](#noop)
  - [ifElse](#ifelse)
  - [map](#map)
  - [filter](#filter)
  - [reduce](#reduce)
  - [reduceRight](#reduceright)
  - [reduceFrom](#reducefrom)
  - [reduceFromRight](#reducefromright)
  - [every](#every)
  - [some](#some)
  - [join](#join)
  - [split](#split)
  - [property](#property)
  - [method](#method)
  - [isTruthy](#istruthy)
  - [isFalsy](#isfalsy)
- [Maintainers](#maintainers)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Install

```
$ npm install --save 1-liners
```

### Usage in es5

```js
var map = require('1-liners').map;
var map = require('1-liners/map');
```

### Using in es6

```js
import map from '1-liners/map';
import map from '1-liners/module/map'; // uncompiled
import { map, filter } from '1-liners';
```


## API

### length

Returns the length of an array.

```js
var length = require('1-liners/length');

length([0, 1, 2]); // => 3
```

### head

Returns the first item of an array.

```js
var head = require('1-liners/head');

head([1, 2, 3]); // => 1
```

### tail

Returns the tail of an array

```js
var tail = require('1-liners/tail');

tail([1, 2, 3]); // => [2, 3]
```

### take

Take n items of an array. Same as `arr.slice(0, n)`.

```js
var take = require('1-liners/take');

take(2, [1, 2, 3]); // => [1, 2]
```

### takeWhile

Take items of an array while they fulfill a predicate.

```js
var takeWhile = require('1-liners/takeWhile');

takeWhile(i => i % 2 === 0, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
```

### takeUntil

Take items of an array until they fulfill a predicate.

```js
var takeUntil = require('1-liners/takeUntil');

takeUntil(i => i % 2 === 1, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
```

### nth

Returns the nth item of an array.

```js
var nth = require('1-liners/nth');

nth(1, [1, 2, 3]); // => 2
```


### equal

Same as `a === b`.

```js
var equal = require('1-liners/equal');

equal(true, true); // => true
equal(false, true); // => false
equal(1, true); // => false
```

### looseEqual

Same as `a == b`.

```js
var looseEqual = require('1-liners/looseEqual');

looseEqual(true, true); // => true
looseEqual(false, true); // => false
looseEqual(1, true); // => true
```

### and

Same as `a && b`.

```js
var and = require('1-liners/and');

and(true, true); // => true
and(false, true); // => false
```

### or

Same as `a || b`.

```js
var or = require('1-liners/or');

or(true, true); // => true
or(false, true); // => true
or(false, false); // => false
```

### not

Same as `!a`.

```js
var not = require('1-liners/not');

not(true); // => false
not(false); // => true
```

### nor

Same as `!(a || b)`.

```js
var nor = require('1-liners/nor');

nor(0, 0); // => true
nor(1, 0); // => false
```

### nand

Same as `!(a && b)`.

```js
var nand = require('1-liners/nand');

nand(0, 0); // => true
nand(1, 1); // => false
```

### bitAnd

Same as `a & b`.

```js
var bitAnd = require('1-liners/bitAnd');

bitAnd(1, 2); // => 0
bitAnd(2, 2); // => 2
```

### bitOr

Same as `a | b`.

```js
var bitOr = require('1-liners/bitOr');

bitOr(0, 1); // => 1
bitOr(1, 1); // => 1
```

### xor

Same as `(x && !y) || (!x && y)`

```js
var xor = require('1-liners/xor');

xor(0, 1); // => 1
xor(1, 1); // => 0
```

### min

Same as `Math.min` – but with a stable number of arguments.

```js
var min = require('1-liners/min');

min(3, 6);  // => 3

[3, 6, 1].reduce(min);       // => 1
[3, 6, 1].reduce(Math.min);  // => NaN
```

### max

Same as `Math.max` – but with a stable number of arguments.

```js
var max = require('1-liners/max');

max(3, 6);  // => 6

[3, 6, 9].reduce(max);       // => 9
[3, 6, 9].reduce(Math.max);  // => NaN
```

### inc

Increment a value by one (default) or more.

```js
var inc = require('1-liners/inc');

inc(1); // => 2
inc(2, 8); // => 10
```

### dec

Decrement a value by one (default) or more.

```js
var dec = require('1-liners/dec');

dec(1); // => 0
dec(10, 2); // => 8
```

### compose

Compose a new function from two given functions.

```js
var compose = require('1-liners/compose');

compose(f, g)(1, 2) === f(g(1, 2));
```

### pipe

Pipe arguments through functions.

```js
var pipe = require('1-liners/pipe');

pipe(f, g)(1, 2) === g(f(1, 2));
```

### shave

Shave ensures that a function is called with n arguments.

```js
var shave = require('1-liners/shave');

map(parseInt, [0, 1.1, 2.2]); // => [0, NaN, NaN]
map(shave(1, parseInt), [0, 1.1, 2.2]); // => [0, 1, 2]
```

### curry2,3,4

Curry a function – split its list of parameters into 2, 3 or 4 lists.

```js
const curry2 = require('1-liners/curry2');
const curry3 = require('1-liners/curry3');
const curry4 = require('1-liners/curry4');

const f = (a, b, c) => a + b * c;
const fβ = curry3(f);
fβ(1)(2)(3);  // => 7

const g = (a, b, c, d) => a + b * c - d;
const gβ = curry3(g);
gβ(1)(2)(3, 4);  // => 3
gβ(1)(2, 3)(4);  // => 3
gβ(1, 2)(3)(4);  // => 3
```

### curryRight2

Curry a function from the right – split its parameters into 2 lists. Apply the second list of parameters first, without changing the order within the lists.

```js
const curryRight2 = require('1-liners/curryRight2');

const g = (a, b, c, d) => a + b * c - d;
g(1, 2, 3, 4);  // => 3

const gλ = curryRight2(g);
gλ(4)(1, 2, 3);  // => 3
gλ(3, 4)(1, 2);  // => 3
gλ(2, 3, 4)(1);  // => 3
```

### uncurry2,3,4

Uncurry a function – collapse 2, 3 or 4 lists of parameters into one.

```js
const uncurry2 = require('1-liners/uncurry2');
const uncurry3 = require('1-liners/uncurry3');
const uncurry4 = require('1-liners/uncurry4');

const f = (a) => (b) => (c) => a + b * c;
const fβ = uncurry3(f);
fβ(1, 2, 3);  // => 7

const g = (a) => (b) => (c, d) => a + b * c - d;
const gβ = uncurry3(g);
gβ(1, 2, 3, 4);  // => 3
```

### flip

Flip a function’s arguments.

```js
var flip = require('1-liners/flip');

var f = (a, b) => a / b;

flip(f)(2, 6);        // => 3
flip(flip(f))(6, 2);  // => 3
```

### implode

Collapse a list of arguments into an array of arguments.

```js
var implode = require('1-liners/implode');

const f = (a, b) => a + b;

[
	[1, 2],
	[3, 4],
	[5, 6],
].map(implode(f));  // => [3, 7, 11]
```

### explode

The opposite of [implode](#implode).

```js
var explode = require('1-liners/explode');

const sum = (numbers) => numbers.reduce((a, b) => a + b);

explode(sum)(1, 2, 3, 4);  // => 10
```

### noop

Same as `function(){}`.

```js
var noop = require('1-liners/noop');

window.console = {
    log: noop,
    error: noop,
    warn: noop,
    table: noop
};
```

### ifElse

Creates a function which calls the first function if the predicate is true
and the second function if the predicate is false.

```js
let ifElse = require('1-liners/ifElse');

let eq = (a, b) => a === b;
let add = (a, b) => a + b;
let sub = (a, b) => a - b;

let addIfEq = ifElse(eq, add, sub);

addIfEq(1, 1); // => 2
addIfEq(2, 1); // => 1

let words = ifElse((str) => typeof str === 'string', (str) => str.split(' '));

words('Hello ES2015'); // => ['Hello', 'ES2015']
```

### map

Same as `[1, 2, 3].map(Math.sqrt)`.

```js
var map = require('1-liners/map');

map(Math.sqrt, [9, 25]); // => [3, 5]
```

### filter

Same as `[1, 2, 3].filter(isOdd)`.

```js
var filter = require('1-liners/filter');

filter(isOdd, [1, 2, 3]); // => [1, 3]
```

### reduce

Same as `[1, 2, 3].reduce(sum)`.

```js
var reduce = require('1-liners/reduce');

reduce(sum, [1, 2, 3]); // => 6
```

### reduceRight

Same as `[1, 2, 3].reduceRight(sub)`.

```js
var reduceRight = require('1-liners/reduceRight');

reduceRight(sub, [1, 2, 3]); // => -4
```

### reduceFrom

Same as `[1, 2, 3].reduceFrom(sum, 8)`.

```js
var reduceFrom = require('1-liners/reduceFrom');

reduceFrom(sum, 8, [1, 2, 3]); // => 2
```

### reduceFromRight

Same as `[1, 2, 3].reduceFromRight(sub, 1)`.

```js
var reduceFromRight = require('1-liners/reduceFromRight');

reduceFromRight(sub, 1, [1, 2, 3]); // => -5
```

### every

Same as `[1,2,3].every(GreaterThan16)`.

```js
var every = require('1-liners/every');

every(elem => elem > 16, [16,17,18]); // => false
```

### some

Same as `[1,2,3].some(GreaterThan16)`

```js
var some = require('1-liners/some');

some(elem => elem > 16, [16,17,18]); // => true
```

### join

Same as `[1, 'liners'].join('-')`

```js
var join = require('1-liners/join');

join('-', [1, 'liners']); // => '1-liners'
```

### split

Same as `'1-liners'.split('-')`

```js
var split = require('1-liners/split');

split('-', '1-liners'); // => [1, 'liners']
```

### property

Same as `object.property`

```js
const property = require('1-liners/property');

const object = {foo: 1};

property('foo', object);  // => 1
```

### method

Same as `object.method(...args)`

```js
const method = require('1-liners/method');

const object = {
	base: 1,
	add(number) { return this.base + number; },
};

method('add', object)(5);  // => 6
```

### isTruthy

Same as `!!`.

```js
var isTruthy = require('1-liners/isTruthy');

isTruthy('yes');  // => true
isTruthy(true);   // => true
isTruthy([]);     // => true

isTruthy('');     // => false
isTruthy(0);      // => false
isTruthy(false);  // => false
```

### isFalsy

Same as `!`.

```js
var isFalsy = require('1-liners/isFalsy');

isFalsy('yes');  // => false
isFalsy(true);   // => false
isFalsy([]);     // => false

isFalsy('');     // => true
isFalsy(0);      // => true
isFalsy(false);  // => true
```


## Maintainers

|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![hemanth](https://avatars.githubusercontent.com/u/18315?v=3&s=80)](https://github.com/hemanth) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi)  |
| :--:|:--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [hemanth](https://github.com/hemanth) | [tomekwi](https://github.com/tomekwi)  |

created with [gh-contributors-table](https://github.com/stoeffel/gh-contributors-table)


## License

MIT © [stoeffel](http://schtoeffel.ch)

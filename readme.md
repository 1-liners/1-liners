# 1-liners
[![Coverage Status](https://coveralls.io/repos/stoeffel/1-liners/badge.svg?branch=master)](https://coveralls.io/r/stoeffel/1-liners?branch=master) [![Build Status](https://travis-ci.org/stoeffel/1-liners.svg?branch=master)](https://travis-ci.org/stoeffel/1-liners) [![Dependency Status](https://david-dm.org/stoeffel/1-liners.svg)](https://david-dm.org/stoeffel/1-liners)

> Useful oneliners and shorthand functions

PRs are welcome!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Install](#install)
- [API](#api)
  - [head](#head)
  - [tail](#tail)
  - [nth](#nth)
  - [and](#and)
  - [or](#or)
  - [not](#not)
  - [nor](#nor)
  - [nand](#nand)
  - [bitAnd](#bitand)
  - [bitOr](#bitor)
  - [xor](#xor)
  - [compose](#compose)
  - [apply](#apply)
  - [noop](#noop)
  - [ifElse](#ifelse)
  - [map](#map)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```
$ npm install --save 1-liners
```


## API

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

### nth

Returns the nth item of an array.

```js
var nth = require('1-liners/nth');

nth(1, [1, 2, 3]); // => 2
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

### compose

Compose a new function from two given functions.

```js
var compose = require('1-liners/compose');

compose(f, g)(1, 2) === f(g(1, 2));
```

### apply

Same as `func(...[a, b /*,..*/])`.

```js
var apply = require('1-liners/apply');

apply(f, [a, b, c]) === f(a, b, c); // => true
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

## License

MIT © [stoeffel](http://schtoeffel.ch)

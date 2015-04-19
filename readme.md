# 1-liners [![Build Status](https://travis-ci.org/stoeffel/1-liners.svg?branch=master)](https://travis-ci.org/stoeffel/1-liners)

> Useful oneliners and shorthand functions

PRs are welcome!

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

Same as `!(a | b)`.

```js
var nor = require('1-liners/nor');

nor(0, 0); // => true
nor(1, 0); // => false
```

### bitAnd

Same as `a & b`.

```js
var bitAnd = require('1-liners/bitAnd');

bitAnd(1, 2); // => 0
bitAnd(2, 2); // => 2
```

## License

MIT © [stoeffel](http://schtoeffel.ch)

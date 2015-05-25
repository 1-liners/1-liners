
&nbsp;

<p align="center"><img src="https://cdn.rawgit.com/1-liners/Logos/master/logo.png" width="382px" height="125px" /></p>

&nbsp;

[![Coverage Status](https://coveralls.io/repos/1-liners/1-liners/badge.svg?branch=master)](https://coveralls.io/r/1-liners/1-liners?branch=master)
[![Build Status](https://travis-ci.org/1-liners/1-liners.svg?branch=master)](https://travis-ci.org/1-liners/1-liners)
[![Dependency Status](https://david-dm.org/1-liners/1-liners.svg)](https://david-dm.org/1-liners/1-liners)
[![npm version](https://badge.fury.io/js/1-liners.svg)](http://badge.fury.io/js/1-liners)
[![Stability: unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![Join the chat at https://gitter.im/1-liners/1-liners](https://img.shields.io/badge/gitter-join%20chat-1dce73.svg)](https://gitter.im/1-liners/1-liners)

<sup>MADE IN SWITZERLAND</sup>

1-liners
====

**Functional tools that couldn’t be simpler.**

We’re proud to present *1-liners* – a stupid-simple functional utility belt. 62 *[@stoeffel this can update automatically]* one-liner functions, hand-crafted with love and attention.

You get a product of top-quality functional programming craftmanship. Each function follows the *KISS* principle, which we’ve broken down into ten concrete rules:

> 1. Each function shall **fit in one readable line of code**.
> – you can grasp it by just glimpsing at the source code. [i.e flip.js](https://github.com/1-liners/1-liners/blob/master/module/flip.js#L18)
> 
> 2. Each function shall **have no side-effects**.
> – you can use it with confidence.
> 
> 3. Each function shall **have a stable number of arguments**.
> – it’s dead easy to bind, curry and uncurry.
> 
> 4. Each function shall **deal with data in an immutable way**.
> – this helps you avoid debugging nightmares.
> 
> 5. Each function shall **take data as the last argument**.
> – this makes composing new functions a breeze.
> 
> 6. Each function shall **be in a separate micro-module**.
> – you download or load only what you need.
> 
> 7. Each function shall **be thoroughly tested**.
> – 100% code coverage guaranteed. We even test if every function fits in one line. [coverage](https://coveralls.io/r/1-liners/1-liners)
> 
> 8. Each function shall **have great documentation**.
> – the docs show usage and the source, and link to the specification. [documentation](https://github.com/1-liners/1-liners/tree/master/documentation)
> 
> 9. We shall provide functional versions of **native object methods**.
> – like `array.reduce`.
> 
> 10. We shall provide functional versions of **language constructs**.
> – like `+` or `&&`.

<p align="center"><img src="https://cdn.rawgit.com/1-liners/Logos/master/swissknife.gif" width="400px" height="150px" /></p>

## Usage

### Install

```
$ npm install --save 1-liners
```

### Usage in ES5

```js
// The lightweight, recommended way:
var map = require('1-liners/map');

// Sometimes practical:
var map = require('1-liners').map;
```

### Usage in ES 2015 (formerly ES6)

```js
// The lightweight, recommended way:
import map from '1-liners/module/map';

// You can also grab the ES5 version:
import map from '1-liners/map';

// Sometimes practical:
import { map, filter } from '1-liners';
```

## API

Checkout the [documentation](./documentation)

## Maintainers

|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![hemanth](https://avatars.githubusercontent.com/u/18315?v=3&s=80)](https://github.com/hemanth) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi)  |
| :--:|:--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [hemanth](https://github.com/hemanth) | [tomekwi](https://github.com/tomekwi)  |

created with [gh-contributors-table](https://github.com/stoeffel/gh-contributors-table)


## License

MIT © [stoeffel](http://schtoeffel.ch) [tomekwi](http://github.com/tomekwi) [hemanth](http://www.h3manth.com/)

<sup>MADE IN SWITZERLAND</sup>

[![Coverage Status](https://coveralls.io/repos/1-liners/1-liners/badge.svg?branch=master)](https://coveralls.io/r/1-liners/1-liners?branch=master)
[![Build Status](https://travis-ci.org/1-liners/1-liners.svg?branch=master)](https://travis-ci.org/1-liners/1-liners)
[![Dependency Status](https://david-dm.org/1-liners/1-liners.svg)](https://david-dm.org/1-liners/1-liners)
[![npm version](https://badge.fury.io/js/1-liners.svg)](http://badge.fury.io/js/1-liners)
[![Stability: unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://github.com/1-liners/1-liners/milestones/1.0)
[![Join the chat at https://gitter.im/1-liners/1-liners](https://img.shields.io/badge/gitter-join%20chat-1dce73.svg)](https://gitter.im/1-liners/1-liners)

<h1 align="center"><a
	title="Functional tools that couldn’t be simpler"
	href="./documentation/README.md"
	>
	<br/>
	<br/>
	<br/>
	<img
		alt="1-liners"
		src="https://cdn.rawgit.com/1-liners/Logos/master/logo.png"
		width="382px"
		height="125px"
	/>
	<br/>
	<br/>
	<br/>
	<br/>
</a></h1>

**Functional tools that couldn’t be simpler.**

We’re proud to present *1-liners* – a dead simple functional utility belt. **[119 one-liner functions][docs]** (and counting). Each hand-crafted with love and attention.

[docs]:  ./documentation

<p align="center">
	<br/>
	<br/>
	<br/>
	<img
		src="https://cdn.rawgit.com/1-liners/Logos/master/swissknife.gif"
		width="400px"
		height="300px"
	/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
</p>


## Our decalogue

You get a product of top-quality functional programming craftmanship. Each function follows the *KISS* principle, which we’ve broken down into ten strict rules.

We always follow them. You have our word.


<p align="center"><a
	title="from Beautiful Flat Icons by Nick Roach"
	href="https://www.elegantthemes.com/blog/freebie-of-the-week/beautiful-flat-icons-for-free"
	>
	<br/>
	<br/>
	<img
		alt="1-liners"
		src="https://cdn.rawgit.com/1-liners/Logos/04c6949/megaphone.svg"
		width="120px"
		height="120px"
	/>
	<br/>
	<br/>
	<br/>
</a></p>


1.  Each function shall **[fit in one readable line of code][]**  
  – take a glimpse at the source and you know exactly what’s going on.  
  &nbsp;

2.  Each function shall **[have no side-effects][]**  
  – you can use it with confidence.  
  &nbsp;

3.  Each function shall **[have a fixed number of arguments][]**  
  – it’s dead easy to bind, curry and uncurry, apply partially, implode and explode.  
  &nbsp;

4.  Each function shall **[deal with data in an immutable way][]**  
  – no more debugging nightmares.  
  &nbsp;

5.  Each function shall **[take data as the last argument][]**  
  – this makes currying and composing new functions a breeze.  
  &nbsp;

6.  Each function shall **[be in a separate micro-module][]**  
  – you only load/bundle the single 1-liner you need.  
  &nbsp;

7.  Each function shall **[be thoroughly tested][]**  
  – 100% code coverage guaranteed. We even test if every function fits in one line!  
  &nbsp;

8.  Each function shall **[have great documentation][]**  
  – the docs explain usage, present the source, and link to the specs.  
  &nbsp;

9.  We shall provide functional versions of **[native object methods][]**  
  – like `reduce(callback, array)` for `array.reduce(callback)`.  
  &nbsp;

10. We shall provide functional versions of **[language constructs][]**  
  – like `plus(a, b)` for `a + b`.  
  &nbsp;

[fit in one readable line of code]:    https://github.com/1-liners/1-liners/blob/28b02d0939d6bb4034693e48440f450141453ae9/module/flip.js#L18
[have no side-effects]:                ./documentation#extend
[have a fixed number of arguments]:   ./documentation#shave
[deal with data in an immutable way]:  ./documentation#put
[take data as the last argument]:      ./documentation#split
[be in a separate micro-module]:       https://github.com/1-liners/1-liners/blob/28b02d0939d6bb4034693e48440f450141453ae9/module/compose.js
[be thoroughly tested]:                https://coveralls.io/r/1-liners/1-liners?branch=master
[have great documentation]:            ./documentation
[native object methods]:               ./documentation#reduce
[language constructs]:                 ./documentation#plus


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

// Sometimes practical:
import { map, filter } from '1-liners/module/index';
```

## API

Checkout the [documentation](./documentation)

## Maintainers

|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi) | [![hemanth](https://avatars.githubusercontent.com/u/18315?v=3&s=80)](https://github.com/hemanth)  |
| :--:|:--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [tomekwi](https://github.com/tomekwi) | [hemanth](https://github.com/hemanth)  |

|  [![davidchase](https://avatars.githubusercontent.com/u/490291?v=3&s=80)](https://github.com/davidchase) | [![tristaaan](https://avatars.githubusercontent.com/u/5470619?v=3&s=80)](https://github.com/tristaaan)  |
| :--:|:--: |
|  [davidchase](https://github.com/davidchase) | [tristaaan](https://github.com/tristaaan)  |

created with [gh-contributors-table](https://github.com/stoeffel/gh-contributors-table)


## License

MIT © [stoeffel](http://schtoeffel.ch) [tomekwi](http://github.com/tomekwi) [hemanth](http://www.h3manth.com/) [davidchase](http://github.com/davidchase) [tristaaan](http://github.com/tristaaan)

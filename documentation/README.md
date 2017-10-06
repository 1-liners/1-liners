&nbsp;<p align="center"><img src="https://cdn.rawgit.com/stoeffel/1-liners/66775c8/logo.png" width="382px" height="125px" /></p>&nbsp;
# Documentation

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [always](#always)
- [and](#and)
- [assign](#assign)
- [average](#average)
- [between](#between)
- [bind](#bind)
- [bitAnd](#bitand)
- [bitOr](#bitor)
- [butLast](#butlast)
- [by](#by)
- [castArray](#castarray)
- [charAt](#charat)
- [charCodeAt](#charcodeat)
- [codePointAt](#codepointat)
- [compose](#compose)
- [composeAll](#composeall)
- [concat](#concat)
- [converge](#converge)
- [curry](#curry)
- [curryRight](#curryright)
- [dec](#dec)
- [drop](#drop)
- [endsWith](#endswith)
- [endsWithAt](#endswithat)
- [entries](#entries)
- [equal](#equal)
- [every](#every)
- [exec](#exec)
- [explode](#explode)
- [filter](#filter)
- [findKey](#findkey)
- [flatMap](#flatmap)
- [flip](#flip)
- [fold](#fold)
- [foldRight](#foldright)
- [forEach](#foreach)
- [get](#get)
- [greaterOrEqual](#greaterorequal)
- [greaterThan](#greaterthan)
- [hasOwnProperty](#hasownproperty)
- [head](#head)
- [identity](#identity)
- [ifThen](#ifthen)
- [ifThenElse](#ifthenelse)
- [implode](#implode)
- [inc](#inc)
- [includes](#includes)
- [indexOf](#indexof)
- [isBetween](#isbetween)
- [isBoolean](#isboolean)
- [isFalse](#isfalse)
- [isFalsy](#isfalsy)
- [isFunction](#isfunction)
- [isNull](#isnull)
- [isNumber](#isnumber)
- [isObject](#isobject)
- [isPlainObject](#isplainobject)
- [isPrototypeOf](#isprototypeof)
- [isString](#isstring)
- [isTrue](#istrue)
- [isTruthy](#istruthy)
- [isTypeOf](#istypeof)
- [isUndefined](#isundefined)
- [isUnknown](#isunknown)
- [join](#join)
- [keyBy](#keyby)
- [keys](#keys)
- [last](#last)
- [lastIndexOf](#lastindexof)
- [length](#length)
- [lessOrEqual](#lessorequal)
- [lessThan](#lessthan)
- [localeCompare](#localecompare)
- [looseEqual](#looseequal)
- [map](#map)
- [match](#match)
- [max](#max)
- [method](#method)
- [min](#min)
- [minus](#minus)
- [nand](#nand)
- [noop](#noop)
- [nor](#nor)
- [normalize](#normalize)
- [not](#not)
- [nth](#nth)
- [omit](#omit)
- [once](#once)
- [or](#or)
- [partial](#partial)
- [partition](#partition)
- [pick](#pick)
- [pipe](#pipe)
- [pipeAll](#pipeall)
- [plus](#plus)
- [product](#product)
- [property](#property)
- [propertyIsEnumerable](#propertyisenumerable)
- [push](#push)
- [put](#put)
- [range](#range)
- [reduce](#reduce)
- [reduceRight](#reduceright)
- [repeat](#repeat)
- [replace](#replace)
- [search](#search)
- [shallowClone](#shallowclone)
- [shave](#shave)
- [signum](#signum)
- [slice](#slice)
- [some](#some)
- [split](#split)
- [startsWith](#startswith)
- [startsWithAt](#startswithat)
- [sum](#sum)
- [tail](#tail)
- [take](#take)
- [takeUntil](#takeuntil)
- [takeWhile](#takewhile)
- [test](#test)
- [times](#times)
- [toLowerCase](#tolowercase)
- [toType](#totype)
- [toUpperCase](#touppercase)
- [trim](#trim)
- [truncate](#truncate)
- [uncurry](#uncurry)
- [uncurry3](#uncurry3)
- [unfold](#unfold)
- [uniq](#uniq)
- [uniqBy](#uniqby)
- [values](#values)
- [xor](#xor)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### always

Creates a function that always returns a given value

```js
const always = require('1-liners/always');

const T = always(true);
T(); // => true
T(); // => true

const fortyTwo = always(42);
fortyTwo(); // => 42
fortyTwo(); // => 42
```

<div align="right"><sup>
	<a href="../tests/always.js">Spec</a>
	•
	<a href="../module/always.js">Source</a>: <code> val =&gt; () =&gt; val;</code>
</sup></div>


### and

Same as `a && b`.

```js
const and = require('1-liners/and');

and(true, true); // => true
and(false, true); // => false
```

<div align="right"><sup>
	<a href="../tests/and.js">Spec</a>
	•
	<a href="../module/and.js">Source</a>: <code> (x, y) =&gt; x &amp;&amp; y;</code>
</sup></div>


### assign

Returns a new object and assigns `assign` to `object`.

```js
const assign = require('1-liners/assign');

const yedi = { id: 1, age: 100 };

assign({ name: 'Yoda', age: 900 }, yedi);  // => { id: 1, name: 'Yoda', age:900 }
```

<div align="right"><sup>
	<a href="../tests/assign.js">Spec</a>
	•
	<a href="../module/assign.js">Source</a>: <code> (assign, object) =&gt; ({ ...object, ...assign });</code>
</sup></div>


### average

Returns the average of all items of an `array`.

```js
const average = require('1-liners/average');

average([2, 3, 4]);        // => 3
average([]);               // => NaN
```

<div align="right"><sup>
	<a href="../tests/average.js">Spec</a>
	•
	<a href="../module/average.js">Source</a>: <code> (array) =&gt; array.reduce((a, b) =&gt; (a + b), 0) / array.length;</code>
</sup></div>


### between

Return `number` if it’s greater than `min` and lower than `max`. Else return `min` or `max` respectively.

```js
const between = require('1-liners/between');

between(1, 10, 2.5);  // => 2.5
between(1, 10, -5);   // => 1
between(1, 10, 25);   // => 10
```

<div align="right"><sup>
	<a href="../tests/between.js">Spec</a>
	•
	<a href="../module/between.js">Source</a>: <code> (min, max, number) =&gt; (number &lt; min ? min : (number &gt; max ? max : number));</code>
</sup></div>


### bind

Binds a context to a function. Same as [`fun.bind(thisArg[, arg1[, arg2[, ...]]])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```js
const bind = require('1-liners/bind');

setTimeout(bind(console, ['Hello'], console.log), 2000); // => 'Hello' (after 2s)
```

<div align="right"><sup>
	<a href="../tests/bind.js">Spec</a>
	•
	<a href="../module/bind.js">Source</a>: <code> (thisArg, args, fun) =&gt; fun.bind(thisArg, ...args);</code>
</sup></div>


### bitAnd

Same as `a & b`.

```js
const bitAnd = require('1-liners/bitAnd');

bitAnd(1, 2); // => 0
bitAnd(2, 2); // => 2
```

<div align="right"><sup>
	<a href="../tests/bitAnd.js">Spec</a>
	•
	<a href="../module/bitAnd.js">Source</a>: <code> (x, y) =&gt; x &amp; y;</code>
</sup></div>


### bitOr

Same as `a | b`.

```js
const bitOr = require('1-liners/bitOr');

bitOr(0, 1); // => 1
bitOr(1, 1); // => 1
```

<div align="right"><sup>
	<a href="../tests/bitOr.js">Spec</a>
	•
	<a href="../module/bitOr.js">Source</a>: <code> (x, y) =&gt; x | y;</code>
</sup></div>


### butLast

Return a copy of `array`, without the last item.

```js
import butLast from '1-liners/butLast';

const array = [1, 2, 3];

butLast(array);  // => [1, 2]
array;           // => [1, 2, 3]
```

<div align="right"><sup>
	<a href="../tests/butLast.js">Spec</a>
	•
	<a href="../module/butLast.js">Source</a>: <code> (array) =&gt; array.slice(0, -1);</code>
</sup></div>


### by

Same as `a / b`

```js
const by = require('1-liners/by');

by(6, 2); // => 3
```

<div align="right"><sup>
	<a href="../tests/by.js">Spec</a>
	•
	<a href="../module/by.js">Source</a>: <code> (a, b) =&gt; a / b;</code>
</sup></div>


### castArray

If the provided `value` is an array returns a copy of it otherwise returns an array containing the original `value`.

```js
const castArray = require('1-liners/castArray');

castArray([1, 2, 3]);  // => [1, 2, 3]
castArray(1);  				 // => [1]
castArray(null);  	   // => [null]
```

<div align="right"><sup>
	<a href="../tests/castArray.js">Spec</a>
	•
	<a href="../module/castArray.js">Source</a>: <code> (value) =&gt; Array.isArray(value) ? value.slice(0) : [value];</code>
</sup></div>


### charAt

Same as `'STR'.charAt(0)`.

```js
const charAt = require('1-liners/charAt');

charAt(0, 'super') // => s
```

<div align="right"><sup>
	<a href="../tests/charAt.js">Spec</a>
	•
	<a href="../module/charAt.js">Source</a>: <code> (index, str) =&gt; str.charAt(index);</code>
</sup></div>


### charCodeAt

Same as `'STR'.charCodeAt(0)`.

```js
const charCodeAt = require('1-liners/charCodeAt');

charCodeAt(0, 'super') // => 115
```

<div align="right"><sup>
	<a href="../tests/charCodeAt.js">Spec</a>
	•
	<a href="../module/charCodeAt.js">Source</a>: <code> (index, str) =&gt; str.charCodeAt(index);</code>
</sup></div>


### codePointAt

Same as `'STR'.codePointAt(0)`.

```js
const codePointAt = require('1-liners/codePointAt');

codePointAt(0, 'super') // => 115
```

<div align="right"><sup>
	<a href="../tests/codePointAt.js">Spec</a>
	•
	<a href="../module/codePointAt.js">Source</a>: <code> (index, str) =&gt; str.codePointAt(index);</code>
</sup></div>


### compose

Compose a new function from two given functions.

```js
const compose = require('1-liners/compose');

compose(f, g)(1, 2) === f(g(1, 2));
```

<div align="right"><sup>
	<a href="../tests/compose.js">Spec</a>
	•
	<a href="../module/compose.js">Source</a>: <code> (f, g) =&gt; (...args) =&gt; f(g(...args));</code>
</sup></div>


### composeAll

Compose a new function with a given array of functions.

```js
const composeAll = require('1-liners/composeAll');

composeAll([f, g, h])(1, 2) === f(g(h(1, 2)));
```

<div align="right"><sup>
	<a href="../tests/composeAll.js">Spec</a>
	•
	<a href="../module/composeAll.js">Source</a>: <code> (fns) =&gt; fns.reduce( (f, g) =&gt; (...args) =&gt; f(g(...args)) );</code>
</sup></div>


### concat

Returns a copy of `array` with `values` or `value` appended at the end. Same as [`array.concat(values)` or `array.concat(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

```js
const concat = require('1-liners/concat');

concat(['c', 'd'], ['a', 'b']);  // => ['a', 'b', 'c', 'd']
concat(['c'], ['a', 'b']);       // => ['a', 'b', 'c']
concat('c', ['a', 'b']);         // => ['a', 'b', 'c']
```

<div align="right"><sup>
	<a href="../tests/concat.js">Spec</a>
	•
	<a href="../module/concat.js">Source</a>: <code> (values, array) =&gt; array.concat(values);</code>
</sup></div>


### converge

Converge two functions into one.

```js
const converge = require('1-liners/converge');

converge(f, g, h)(1, 2) === f(g(1, 2), h(1, 2));
```

<div align="right"><sup>
	<a href="../tests/converge.js">Spec</a>
	•
	<a href="../module/converge.js">Source</a>: <code> (f, g, h) =&gt; (...args) =&gt; f(g(...args), h(...args));</code>
</sup></div>


### curry

Curry a function – split its list of parameters into 2 lists.

```js
import curry from '1-liners/curry';
import reduce from '1-liners/reduce';
import compose from '1-liners/compose';

// You can use reduce and compose to create curry3,4 and so on.
const curry3 = compose(curry, curry);
const curry4 = reduce(compose, [curry, curry, curry]);

const f = (a, b, c, d) => a * b * c * d;
const fβ = curry(f);  // ~= curry2
const fγ = curry3(f); // ~= curry3
const fδ = curry4(f); // ~= curry4

f(1, 2, 3, 4)  === 24

fβ(1)(2, 3, 4) === 24
fβ(1, 2)(3, 4) === 24
fβ(1, 2, 3)(4) === 24

fγ(1)(2)(3, 4) === 24
fγ(1)(2, 3)(4) === 24

fδ(1)(2)(3)(4) === 24
```

<div align="right"><sup>
	<a href="../tests/curry.js">Spec</a>
	•
	<a href="../module/curry.js">Source</a>: <code> (f) =&gt; (...a) =&gt; (...b) =&gt; f(...a, ...b);</code>
</sup></div>


### curryRight

Curry a function from the right – split its parameters into 2 lists. Apply the second list of parameters first, without changing the order within the lists.

```js
import curryRight from '1-liners/curryRight';

const g = (a, b, c, d) => a + b * c - d;
g(1, 2, 3, 4);  // => 3

const gλ = curryRight(g);
gλ(4)(1, 2, 3);  // => 3
gλ(3, 4)(1, 2);  // => 3
gλ(2, 3, 4)(1);  // => 3
```

<div align="right"><sup>
	<a href="../tests/curryRight.js">Spec</a>
	•
	<a href="../module/curryRight.js">Source</a>: <code> (f) =&gt; (...a) =&gt; (...b) =&gt; f(...b, ...a);</code>
</sup></div>


### dec

Same as `a - 1`

```js
const dec = require('1-liners/dec');

dec(1); // => 0
```

<div align="right"><sup>
	<a href="../tests/dec.js">Spec</a>
	•
	<a href="../module/dec.js">Source</a>: <code> (val) =&gt; val - 1;</code>
</sup></div>


### drop

Returns the tail of `array` after dropping the first `n` elements.
Use this in place of String's `.substr(startIndex)` and `.substring(startIndex)`

```js
const drop = require('1-liners/drop');

const array = [1, 2, 3, 4, 5];
const string = 'Hello World';

drop(2, array);  // => [3, 4, 5]
drop(6, string); // => 'World'
```

<div align="right"><sup>
	<a href="../tests/drop.js">Spec</a>
	•
	<a href="../module/drop.js">Source</a>: <code> (n, array) =&gt; array.slice(Math.max(n, 0), Infinity);</code>
</sup></div>


### endsWith

Same as [`str.endsWith(searchString)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith).

```js
const endsWith = require('1-liners/endsWith');

endsWith('liners', '1-liners');  // => true
endsWith('stoeffel', 'nope');  // => false
```

<div align="right"><sup>
	<a href="../tests/endsWith.js">Spec</a>
	•
	<a href="../module/endsWith.js">Source</a>: <code> (searchString, str) =&gt; str.endsWith(searchString);</code>
</sup></div>


### endsWithAt

Same as [`str.endsWith(searchString, position)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith).

```js
const endsWithAt = require('1-liners/endsWithAt');

endsWithAt(8, 'liners', '1-liners/endsWithAt');  // => true
endsWithAt(2, 'stoeffel', 'nope');  // => false
```

<div align="right"><sup>
	<a href="../tests/endsWithAt.js">Spec</a>
	•
	<a href="../module/endsWithAt.js">Source</a>: <code> (position, searchString, str) =&gt; str.endsWith(searchString, position);</code>
</sup></div>


### entries

Returns an array of a given object's own enumerable property [key, value] pairs
Same as `Object.keys(obj).map(key => [key, obj[key]])`.

```js
const entries = require('1-liners/entries');

entries({ foo: 'bar', baz: 42 }); // => [ ['foo', 'bar'], ['baz', 42] ]
entries(['foo', 'bar', 'baz']); // => [ [0, 'foo'], [1, 'bar'], [2, 'baz'] ]
entries({ foo: 'bar', [Symbol('baz')]: 42 }); // => [ ['foo', 'bar'] ]
entries('foo'); // => [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
```

<div align="right"><sup>
	<a href="../tests/entries.js">Spec</a>
	•
	<a href="../module/entries.js">Source</a>: <code> (obj) =&gt; Object.keys(obj).map(key =&gt; [key, obj[key]]);</code>
</sup></div>


### equal

Same as `a === b`.

```js
const equal = require('1-liners/equal');

equal(true, true); // => true
equal(false, true); // => false
equal(1, true); // => false
```

<div align="right"><sup>
	<a href="../tests/equal.js">Spec</a>
	•
	<a href="../module/equal.js">Source</a>: <code> (x, y) =&gt; x === y;</code>
</sup></div>


### every

Same as `[1,2,3].every(GreaterThan16)`.

```js
const every = require('1-liners/every');

every(elem => elem > 16, [16,17,18]); // => false
```

<div align="right"><sup>
	<a href="../tests/every.js">Spec</a>
	•
	<a href="../module/every.js">Source</a>: <code> (every, arr) =&gt; arr.every(every);</code>
</sup></div>


### exec

Same as [`regexObj.exec(str)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec).

```js
const exec = require('1-liners/exec');
const haystack = 'hAyHAYhayneEdLEHayHAy';

exec(haystack, /needle/i);  // => ['neEdLE']
exec(haystack, /n(.+)e/i);  // => ['neEdLE', 'eEdL']
exec(haystack, /needle/);   // => null
```

<div align="right"><sup>
	<a href="../tests/exec.js">Spec</a>
	•
	<a href="../module/exec.js">Source</a>: <code> (str, regexObj) =&gt; regexObj.exec(str);</code>
</sup></div>


### explode

The opposite of [implode](#implode).

```js
const explode = require('1-liners/explode');

const sum = (numbers) => numbers.reduce((a, b) => a + b);

explode(sum)(1, 2, 3, 4);  // => 10
```

<div align="right"><sup>
	<a href="../tests/explode.js">Spec</a>
	•
	<a href="../module/explode.js">Source</a>: <code> (func) =&gt; (...args) =&gt; func(args);</code>
</sup></div>


### filter

Same as `[1, 2, 3].filter(isOdd)`.

```js
const filter = require('1-liners/filter');

filter(isOdd, [1, 2, 3]); // => [1, 3]
```

<div align="right"><sup>
	<a href="../tests/filter.js">Spec</a>
	•
	<a href="../module/filter.js">Source</a>: <code> (filter, arr) =&gt; arr.filter(filter);</code>
</sup></div>


### findKey

A pure function to find key from object, matching a predicate
similar to https://lodash.com/docs/4.17.4#findKey or Array.findIndex()

```js
const findKey = require('1-liners/findKey');

const data = { a: 1, b: 2, c: 3 };
findKey((x) => x > 2, data); // => 'c'
```

<div align="right"><sup>
	<a href="../tests/findKey.js">Spec</a>
	•
	<a href="../module/findKey.js">Source</a>: <code> (fn, obj) =&gt; Object.keys(obj).find(k =&gt; fn(obj[k]));</code>
</sup></div>


### flatMap

Map a function over a collection and flatten the result by one-level.

```js
const flatMap = require('1-liners/flatMap');

flatMap((x) => [x, x], [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
```

<div align="right"><sup>
	<a href="../tests/flatMap.js">Spec</a>
	•
	<a href="../module/flatMap.js">Source</a>: <code> (fn, array) =&gt; [].concat.apply([], array.map(fn));</code>
</sup></div>


### flip

Flip a function’s arguments.

```js
const flip = require('1-liners/flip');

const f = (a, b) => a / b;

flip(f)(2, 6);        // => 3
flip(flip(f))(6, 2);  // => 3
```

<div align="right"><sup>
	<a href="../tests/flip.js">Spec</a>
	•
	<a href="../module/flip.js">Source</a>: <code> (f) =&gt; (...args) =&gt; f(...args.reverse());</code>
</sup></div>


### fold

Same as [`array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reduce).

```js
const fold = require('1-liners/fold');

fold(sum, 8, [1, 2, 3]); // => 2
```

<div align="right"><sup>
	<a href="../tests/fold.js">Spec</a>
	•
	<a href="../module/fold.js">Source</a>: <code> (fold, initial, arr) =&gt; arr.reduce(fold, initial);</code>
</sup></div>


### foldRight

Same as [`array.reduceRight`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reduceRight).

```js
const foldRight = require('1-liners/foldRight');

foldRight(sub, 1, [1, 2, 3]); // => -5
```

<div align="right"><sup>
	<a href="../tests/foldRight.js">Spec</a>
	•
	<a href="../module/foldRight.js">Source</a>: <code> (fold, initial, arr) =&gt; arr.reduceRight(fold, initial);</code>
</sup></div>


### forEach

Same as `[1, 2, 3].forEach(Math.sqrt)`.

```js
const forEach = require('1-liners/forEach');

forEach(i => console.log('Item: ' + i), [9, 25]); // => logs "Item: 9" and "Item: 25"
```

<div align="right"><sup>
	<a href="../tests/forEach.js">Spec</a>
	•
	<a href="../module/forEach.js">Source</a>: <code> (forEach, arr) =&gt; arr.forEach(forEach);</code>
</sup></div>


### get

Gets the value at path of object.

```js
const get = require('1-liners/get');

 let obj = { a: { b: 42 } };
 get('a.b', obj); // => 42
```

<div align="right"><sup>
	<a href="../tests/get.js">Spec</a>
	•
	<a href="../module/get.js">Source</a>: <code> (path, obj) =&gt; path.split('.').reduce((acc, current) =&gt; acc &amp;&amp; acc[current], obj);</code>
</sup></div>


### greaterOrEqual

Same as `a >= b`.

```js
const greaterOrEqual = require('1-liners/greaterOrEqual');

greaterOrEqual(2, 1); // => true
greaterOrEqual(2, 2); // => true
greaterOrEqual(1, 2); // => false
```

<div align="right"><sup>
	<a href="../tests/greaterOrEqual.js">Spec</a>
	•
	<a href="../module/greaterOrEqual.js">Source</a>: <code> (x, y) =&gt; x &gt;= y;</code>
</sup></div>


### greaterThan

Same as `a > b`.

```js
const greaterThan = require('1-liners/greaterThan');

greaterThan(2, 1); // => true
greaterThan(2, 2); // => false
greaterThan(1, 2); // => false
```

<div align="right"><sup>
	<a href="../tests/greaterThan.js">Spec</a>
	•
	<a href="../module/greaterThan.js">Source</a>: <code> (x, y) =&gt; x &gt; y;</code>
</sup></div>


### hasOwnProperty

Same as [`obj.hasOwnProperty(prop)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).

```js
const hasOwnProperty = require('1-liners/hasOwnProperty');

hasOwnProperty('a', {a: 1, b: 2});  // => true
hasOwnProperty('c', {a: 1, b: 2});  // => false
```

<div align="right"><sup>
	<a href="../tests/hasOwnProperty.js">Spec</a>
	•
	<a href="../module/hasOwnProperty.js">Source</a>: <code> (prop, obj) =&gt; obj.hasOwnProperty(prop);</code>
</sup></div>


### head

Returns the first item of an array.

```js
const head = require('1-liners/head');

head([1, 2, 3]); // => 1
```

<div align="right"><sup>
	<a href="../tests/head.js">Spec</a>
	•
	<a href="../module/head.js">Source</a>: <code> ([head,]) =&gt; head;</code>
</sup></div>


### identity

Returns the value you pass to the function

```js
const identity = require('1-liners/identity');

identity(true); // => true
identity(1); // => 1
identity({ foo: 1 }); // => { foo: 1 }
identity("1-liners"); // => "1-liners"
```

<div align="right"><sup>
	<a href="../tests/identity.js">Spec</a>
	•
	<a href="../module/identity.js">Source</a>: <code> I =&gt; I;</code>
</sup></div>


### ifThen

Creates a function which calls `then` if the `predicate` is true
and returns `undefined` if the `predicate` is false.

```js
const ifThen = require('1-liners/ifThen');

const words = ifThen((str) => typeof str === 'string', (str) => str.split(' '));

words('Hello ES2015'); // => ['Hello', 'ES2015']
    words(['Hello', 'ES2015']); // => undefined
```

<div align="right"><sup>
	<a href="../tests/ifThen.js">Spec</a>
	•
	<a href="../module/ifThen.js">Source</a>: <code> (predicate, then) =&gt; (...args) =&gt; predicate(...args) ? then(...args) : undefined;</code>
</sup></div>


### ifThenElse

Creates a function which calls `then` if the `predicate` is true
and `otherwise` if the `predicate` is false.

```js
const ifThenElse = require('1-liners/ifThenElse');

const eq = (a, b) => a === b;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const addIfEq = ifThenElse(eq, add, sub);

addIfEq(1, 1); // => 2
addIfEq(2, 1); // => 1
```

<div align="right"><sup>
	<a href="../tests/ifThenElse.js">Spec</a>
	•
	<a href="../module/ifThenElse.js">Source</a>: <code> (predicate, then, otherwise) =&gt; (...args) =&gt; predicate(...args) ? then(...args) : otherwise(...args);</code>
</sup></div>


### implode

Collapse a list of arguments into an array of arguments.

```js
const implode = require('1-liners/implode');

const f = (a, b) => a + b;

[
	[1, 2],
	[3, 4],
	[5, 6],
].map(implode(f));  // => [3, 7, 11]
```

<div align="right"><sup>
	<a href="../tests/implode.js">Spec</a>
	•
	<a href="../module/implode.js">Source</a>: <code> (func) =&gt; (args) =&gt; func(...args);</code>
</sup></div>


### inc

Same as `a + 1`

```js
const inc = require('1-liners/inc');

inc(1); // => 2
```

<div align="right"><sup>
	<a href="../tests/inc.js">Spec</a>
	•
	<a href="../module/inc.js">Source</a>: <code> (val) =&gt; val + 1;</code>
</sup></div>


### includes

Same as `'Blue Whale'.includes('blue')`.

```js
const includes = require('1-liners/includes');

includes('blue', 'Blue Whale') // => false
```

<div align="right"><sup>
	<a href="../tests/includes.js">Spec</a>
	•
	<a href="../module/includes.js">Source</a>: <code> (searchString, str) =&gt; str.includes(searchString);</code>
</sup></div>


### indexOf

Same as `'str'.indexOf('t')`.

```js
const indexOf = require('1-liners/indexOf');

indexOf('a', 'hallo') // => 1
```

<div align="right"><sup>
	<a href="../tests/indexOf.js">Spec</a>
	•
	<a href="../module/indexOf.js">Source</a>: <code> (searchValue, str) =&gt; str.indexOf(searchValue);</code>
</sup></div>


### isBetween

Check if the `number` lies between `min` and `max`, inclusive.

```js
const isBetween = require('1-liners/isBetween');

isBetween(1, 10, 2.5);  // => true
isBetween(1, 10, -5);   // => false
isBetween(1, 10, 25);   // => false
```

<div align="right"><sup>
	<a href="../tests/isBetween.js">Spec</a>
	•
	<a href="../module/isBetween.js">Source</a>: <code> (min, max, number) =&gt; (min &lt;= number &amp;&amp; number &lt;= max);</code>
</sup></div>


### isBoolean

Same as `typeof value === 'boolean'`.

```js
const isBoolean = require('1-liners/isBoolean');

isBoolean(false);            // => true
isBoolean(true);             // => true

isBoolean(null);             // => false
isBoolean(/anything else/);  // => false
```

<div align="right"><sup>
	<a href="../tests/isBoolean.js">Spec</a>
	•
	<a href="../module/isBoolean.js">Source</a>: <code> (value) =&gt; typeof value === 'boolean';</code>
</sup></div>


### isFalse

Same as `x === false`.

```js
const isFalse = require('1-liners/isFalse');

isFalse(false);  // => true

isFalse('yes');  // => false
isFalse(true);   // => false
isFalse([]);     // => false
isFalse('');     // => false
isFalse(0);      // => false
```

<div align="right"><sup>
	<a href="../tests/isFalse.js">Spec</a>
	•
	<a href="../module/isFalse.js">Source</a>: <code> (x) =&gt; x === false;</code>
</sup></div>


### isFalsy

Same as `!`.

```js
const isFalsy = require('1-liners/isFalsy');

isFalsy('yes');  // => false
isFalsy(true);   // => false
isFalsy([]);     // => false

isFalsy('');     // => true
isFalsy(0);      // => true
isFalsy(false);  // => true
```

<div align="right"><sup>
	<a href="../tests/isFalsy.js">Spec</a>
	•
	<a href="../module/isFalsy.js">Source</a>: <code> (x) =&gt; !x;</code>
</sup></div>


### isFunction

Same as `typeof value === 'function'`.

```js
const isFunction = require('1-liners/isFunction');

isFunction(function() {});        // => true
isFunction(function named() {});  // => true

isFunction('any other value');    // => false
```

<div align="right"><sup>
	<a href="../tests/isFunction.js">Spec</a>
	•
	<a href="../module/isFunction.js">Source</a>: <code> (value) =&gt; typeof value === 'function';</code>
</sup></div>


### isNull

Same as `=== null`.

```js
const isNull = require('1-liners/isNull');

isNull(null);             // => true

isNull(undefined);        // => false
isNull(NaN);              // => false
isNull('anything else');  // => false
```

<div align="right"><sup>
	<a href="../tests/isNull.js">Spec</a>
	•
	<a href="../module/isNull.js">Source</a>: <code> (value) =&gt; (value === null);</code>
</sup></div>


### isNumber

Same as `typeof value === 'number'`. Use [`Number.isFinite`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) instead if you want to filter out `NaN` and `Infinity`.

```js
const isNumber = require('1-liners/isNumber');

isNumber(1);                // => true
isNumber(3.14);             // => true
isNumber(NaN);              // => true
isNumber(Infinity);         // => true

isNumber('3.14');           // => false
isNumber(/anything else/);  // => false
```

<div align="right"><sup>
	<a href="../tests/isNumber.js">Spec</a>
	•
	<a href="../module/isNumber.js">Source</a>: <code> (value) =&gt; typeof value === 'number';</code>
</sup></div>


### isObject

Same as `value !== null && typeof value === 'object'`.

```js
const isObject = require('1-liners/isObject');

isObject({});               // => true
isObject([]);               // => true
isObject(/anything/);       // => true

isObject(null);             // => false
isObject('anything else');  // => false
```

<div align="right"><sup>
	<a href="../tests/isObject.js">Spec</a>
	•
	<a href="../module/isObject.js">Source</a>: <code> (value) =&gt; (value !== null &amp;&amp; typeof value === 'object');</code>
</sup></div>


### isPlainObject

Checks if an object inherits directly from `null` or `Object.prototype` – like an object literal (`{...}`) does.

Heads up! This function is [not supported on IE 10 and below](https://babeljs.io/docs/usage/caveats/).

```js
const isPlainObject = require('1-liners/isPlainObject');

isPlainObject({});                   // => true
isPlainObject(Object.create(null));  // => true

isPlainObject(null);                 // => false
isPlainObject([]);                   // => false
isPlainObject(/anything else/);      // => false
```

<div align="right"><sup>
	<a href="../tests/isPlainObject.js">Spec</a>
	•
	<a href="../module/isPlainObject.js">Source</a>: <code> (value) =&gt; (value &amp;&amp; typeof value === 'object' &amp;&amp; (value.__proto__ == null || value.__proto__ === Object.prototype));</code>
</sup></div>


### isPrototypeOf

Check if an object's prototype exists in another object's prototype chain

```js
function Foo(){};
function Bar(){};

Bar.prototype = new Foo();

const foo = new Foo();
const bar = new Bar();

Foo.prototype.isPrototypeOf(bar); // => true
Bar.prototype.isPrototypeOf(foo); // => false
```

<div align="right"><sup>
	<a href="../tests/isPrototypeOf.js">Spec</a>
	•
	<a href="../module/isPrototypeOf.js">Source</a>: <code> (prototypeObj, obj) =&gt; prototypeObj.prototype.isPrototypeOf(obj)</code>
</sup></div>


### isString

Same as `typeof value === 'string'`.

```js
const isString = require('1-liners/isString');

isString('');               // => true
isString('anything');       // => true

isString(/anything else/);  // => false
```

<div align="right"><sup>
	<a href="../tests/isString.js">Spec</a>
	•
	<a href="../module/isString.js">Source</a>: <code> (value) =&gt; typeof value === 'string';</code>
</sup></div>


### isTrue

Same as `x === true`.

```js
const isTrue = require('1-liners/isTrue');

isTrue(true);   // => true

isTrue('yes');  // => false
isTrue([]);     // => false
isTrue('');     // => false
isTrue(0);      // => false
isTrue(false);  // => false
```

<div align="right"><sup>
	<a href="../tests/isTrue.js">Spec</a>
	•
	<a href="../module/isTrue.js">Source</a>: <code> (x) =&gt; x === true;</code>
</sup></div>


### isTruthy

Same as `!!`.

```js
const isTruthy = require('1-liners/isTruthy');

isTruthy('yes');  // => true
isTruthy(true);   // => true
isTruthy([]);     // => true

isTruthy('');     // => false
isTruthy(0);      // => false
isTruthy(false);  // => false
```

<div align="right"><sup>
	<a href="../tests/isTruthy.js">Spec</a>
	•
	<a href="../module/isTruthy.js">Source</a>: <code> (x) =&gt; !!x;</code>
</sup></div>


### isTypeOf

Same as `typeof value === TYPE`.

```js
const isTypeOf = require('1-liners/isTypeOf');

isTypeOf('boolean', false);            // => true
isTypeOf('boolean', true);             // => true

isTypeOf('boolean', null);             // => false
isTypeOf('boolean', /anything else/);  // => false
```

<div align="right"><sup>
	<a href="../tests/isTypeOf.js">Spec</a>
	•
	<a href="../module/isTypeOf.js">Source</a>: <code> (type, value) =&gt; typeof value === type;</code>
</sup></div>


### isUndefined

Returns `true` if a value or reference is `undefined`.

```js
const isUndefined = require('1-liners/isUndefined');

isUndefined(undefined);        // => true

isUndefined(null);             // => false
isUndefined(false);            // => false
isUndefined(NaN);              // => false
isUndefined('anything else');  // => false
```

<div align="right"><sup>
	<a href="../tests/isUndefined.js">Spec</a>
	•
	<a href="../module/isUndefined.js">Source</a>: <code> (value) =&gt; (value === void 0);</code>
</sup></div>


### isUnknown

Same as `== null`.

```js
const isUnknown = require('1-liners/isUnknown');

isUnknown(null);             // => true
isUnknown(undefined);        // => true

isUnknown(false);            // => false
isUnknown('');               // => false
isUnknown(NaN);              // => false
isUnknown(/anything else/);  // => false
```

<div align="right"><sup>
	<a href="../tests/isUnknown.js">Spec</a>
	•
	<a href="../module/isUnknown.js">Source</a>: <code> (value) =&gt; (value == null);</code>
</sup></div>


### join

Same as `[1, 'liners'].join('-')`

```js
const join = require('1-liners/join');

join('-', [1, 'liners']); // => '1-liners'
```

<div align="right"><sup>
	<a href="../tests/join.js">Spec</a>
	•
	<a href="../module/join.js">Source</a>: <code> (superglue, arr) =&gt; arr.join(superglue);</code>
</sup></div>


### keyBy

Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`.

```js
const keyBy = require('1-liners/keyBy');
const array = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}];
const dict = keyBy(array, o => o.id); // => {1: {id: 1, name: 'One'}, 2: {id: 2, name: 'Two'} }
```

<div align="right"><sup>
	<a href="../tests/keyBy.js">Spec</a>
	•
	<a href="../module/keyBy.js">Source</a>: <code> (array, iteratee) =&gt; array.reduce((result, item) =&gt; (result[iteratee(item)] = item, result), {});</code>
</sup></div>


### keys

Same as [`Object.keys(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).

```js
const keys = require('1-liners/keys');

keys({ 100: 'a', 2: 'b', 7: 'c' }); // => ['2', '7', '100']
keys([1, 2, 3]); // => [0, 1, 2]
```

<div align="right"><sup>
	<a href="../tests/keys.js">Spec</a>
	•
	<a href="../module/keys.js">Source</a>: <code> (obj) =&gt; Object.keys(obj);</code>
</sup></div>


### last

Returns the last item of `array`.

```js
const last = require('1-liners/last');

last([1, 2, 3]);  // => 3
```

<div align="right"><sup>
	<a href="../tests/last.js">Spec</a>
	•
	<a href="../module/last.js">Source</a>: <code> (array) =&gt; array[array.length - 1];</code>
</sup></div>


### lastIndexOf

Same as `'wow'.lastIndexOf('w')`.

```js
const lastIndexOf = require('1-liners/lastIndexOf');

lastIndexOf('f', 'waffle') // => 3
```

<div align="right"><sup>
	<a href="../tests/lastIndexOf.js">Spec</a>
	•
	<a href="../module/lastIndexOf.js">Source</a>: <code> (searchValue, str) =&gt; str.lastIndexOf(searchValue);</code>
</sup></div>


### length

Returns the length of an array.

```js
const length = require('1-liners/length');

length([0, 1, 2]); // => 3
```

<div align="right"><sup>
	<a href="../tests/length.js">Spec</a>
	•
	<a href="../module/length.js">Source</a>: <code> (arr) =&gt; arr.length;</code>
</sup></div>


### lessOrEqual

Same as `a <= b`.

```js
const lessOrEqual = require('1-liners/lessOrEqual');

lessOrEqual(1, 2); // => true
lessOrEqual(1, 1); // => true
lessOrEqual(2, 1); // => false
```

<div align="right"><sup>
	<a href="../tests/lessOrEqual.js">Spec</a>
	•
	<a href="../module/lessOrEqual.js">Source</a>: <code> (x, y) =&gt; x &lt;= y;</code>
</sup></div>


### lessThan

Same as `a < b`.

```js
const lessThan = require('1-liners/lessThan');

lessThan(1, 2); // => true
lessThan(1, 1); // => false
lessThan(2, 1); // => false
```

<div align="right"><sup>
	<a href="../tests/lessThan.js">Spec</a>
	•
	<a href="../module/lessThan.js">Source</a>: <code> (x, y) =&gt; x &lt; y;</code>
</sup></div>


### localeCompare

Same as `'A'.localeCompare('B')`.

```js
const localeCompare = require('1-liners/localeCompare');

localeCompare('B', 'A') // => -1
```

<div align="right"><sup>
	<a href="../tests/localeCompare.js">Spec</a>
	•
	<a href="../module/localeCompare.js">Source</a>: <code> (compareString, str) =&gt; str.localeCompare(compareString);</code>
</sup></div>


### looseEqual

Same as `a == b`.

```js
const looseEqual = require('1-liners/looseEqual');

looseEqual(true, true); // => true
looseEqual(false, true); // => false
looseEqual(1, true); // => true
```

<div align="right"><sup>
	<a href="../tests/looseEqual.js">Spec</a>
	•
	<a href="../module/looseEqual.js">Source</a>: <code> (x, y) =&gt; x == y;</code>
</sup></div>


### map

Same as `[1, 2, 3].map(Math.sqrt)`.

```js
const map = require('1-liners/map');

map(Math.sqrt, [9, 25]); // => [3, 5]
```

<div align="right"><sup>
	<a href="../tests/map.js">Spec</a>
	•
	<a href="../module/map.js">Source</a>: <code> (map, arr) =&gt; arr.map(map);</code>
</sup></div>


### match

Same as `haystack.match(needle)`.

```js
const match = require('1-liners/match');

match(/\d+/g, 'Items: 3,2'); // => ["3", "2"]
```

<div align="right"><sup>
	<a href="../tests/match.js">Spec</a>
	•
	<a href="../module/match.js">Source</a>: <code> (needle, haystack) =&gt; haystack.match(needle);</code>
</sup></div>


### max

Same as `Math.max` – but with a stable number of arguments.

```js
const max = require('1-liners/max');

max(3, 6);  // => 6

[3, 6, 9].reduce(max);       // => 9
[3, 6, 9].reduce(Math.max);  // => NaN
```

<div align="right"><sup>
	<a href="../tests/max.js">Spec</a>
	•
	<a href="../module/max.js">Source</a>: <code> (a, b) =&gt; ((a &gt; b) ? a : b);</code>
</sup></div>


### method

Same as `object[method](...args)`

```js
const method = require('1-liners/method');

const object = {
	base: 1,
	add(number) { return this.base + number; },
};

method('add', object)(5);  // => 6
```

<div align="right"><sup>
	<a href="../tests/method.js">Spec</a>
	•
	<a href="../module/method.js">Source</a>: <code> (method, object) =&gt; (...args) =&gt; object[method](...args);</code>
</sup></div>


### min

Same as `Math.min` – but with a stable number of arguments.

```js
const min = require('1-liners/min');

min(3, 6);  // => 3

[3, 6, 1].reduce(min);       // => 1
[3, 6, 1].reduce(Math.min);  // => NaN
```

<div align="right"><sup>
	<a href="../tests/min.js">Spec</a>
	•
	<a href="../module/min.js">Source</a>: <code> (a, b) =&gt; ((a &gt; b) ? b : a);</code>
</sup></div>


### minus

Same as `a - b`

```js
const minus = require('1-liners/minus');

minus(3, 2); // => 1
```

<div align="right"><sup>
	<a href="../tests/minus.js">Spec</a>
	•
	<a href="../module/minus.js">Source</a>: <code> (a, b) =&gt; a - b;</code>
</sup></div>


### nand

Same as `!(a && b)`.

```js
const nand = require('1-liners/nand');

nand(0, 0); // => true
nand(1, 1); // => false
```

<div align="right"><sup>
	<a href="../tests/nand.js">Spec</a>
	•
	<a href="../module/nand.js">Source</a>: <code> (x, y) =&gt; !(x &amp;&amp; y);</code>
</sup></div>


### noop

Same as `function(){}`.

```js
const noop = require('1-liners/noop');

window.console = {
		log: noop,
		error: noop,
		warn: noop,
		table: noop
};
```

<div align="right"><sup>
	<a href="../tests/noop.js">Spec</a>
	•
	<a href="../module/noop.js">Source</a>: <code> () =&gt; {};</code>
</sup></div>


### nor

Same as `!(a || b)`.

```js
const nor = require('1-liners/nor');

nor(0, 0); // => true
nor(1, 0); // => false
```

<div align="right"><sup>
	<a href="../tests/nor.js">Spec</a>
	•
	<a href="../module/nor.js">Source</a>: <code> (x, y) =&gt; !(x || y);</code>
</sup></div>


### normalize

Same as `'STR'.normalize()`.

```js
const normalize = require('1-liners/normalize');

normalize('NFD', '\u1E9B\u0323') // => ẛ̣
```

<div align="right"><sup>
	<a href="../tests/normalize.js">Spec</a>
	•
	<a href="../module/normalize.js">Source</a>: <code> (form, str) =&gt; str.normalize(form);</code>
</sup></div>


### not

Same as `!a`.

```js
const not = require('1-liners/not');

not(true); // => false
not(false); // => true
```

<div align="right"><sup>
	<a href="../tests/not.js">Spec</a>
	•
	<a href="../module/not.js">Source</a>: <code> (a) =&gt; !a;</code>
</sup></div>


### nth

Returns the nth item of an array.

```js
const nth = require('1-liners/nth');

nth(1, [1, 2, 3]); // => 2
```

<div align="right"><sup>
	<a href="../tests/nth.js">Spec</a>
	•
	<a href="../module/nth.js">Source</a>: <code> (n, arr) =&gt; arr[n];</code>
</sup></div>


### omit

Creates a copy of the `object` without the given `props`.

```js
const omit = require('1-liners/omit');

const object = {foo: 1, bar: 2, baz: 3};

omit(['foo', 'baz'], object);  // => {bar: 2}
```

<div align="right"><sup>
	<a href="../tests/omit.js">Spec</a>
	•
	<a href="../module/omit.js">Source</a>: <code> (props, obj) =&gt; props.reduce((newObj, val) =&gt; (({ [val]: dropped, ...rest }) =&gt; rest)(newObj), obj);</code>
</sup></div>


### once

Creates a function that is restricted to invoking passed function once.

```js
const once = require('1-liners/once');
let count = 0;
let countOnce = once(() => ++count);
countOnce(); // => 1, (count = 1)
countOnce(); // => 1, (count = 1)
```

<div align="right"><sup>
	<a href="../tests/once.js">Spec</a>
	•
	<a href="../module/once.js">Source</a>: <code> (fn) =&gt; ((first = true) =&gt; () =&gt; first ? (first = !first, fn = fn()) : fn)();</code>
</sup></div>


### or

Same as `a || b`.

```js
const or = require('1-liners/or');

or(true, true); // => true
or(false, true); // => true
or(false, false); // => false
```

<div align="right"><sup>
	<a href="../tests/or.js">Spec</a>
	•
	<a href="../module/or.js">Source</a>: <code> (a, b) =&gt; a || b;</code>
</sup></div>


### partial

Partially apply a function.

```js
const partial = require('1-liners/partial');

const add = (a, b, c) => a + b + c;

 const fivePlus = (add, 2, 3);

 fivePlus(4) === 9
```

<div align="right"><sup>
	<a href="../tests/partial.js">Spec</a>
	•
	<a href="../module/partial.js">Source</a>: <code> (f, ...args) =&gt; (...moreArgs) =&gt; f(...args, ...moreArgs);</code>
</sup></div>


### partition

Creates an array of elements split into two groups, the first of which contains elements `predicate` returns truthy for,
the second of which contains elements `predicate` returns falsey for. The predicate is invoked with one argument: `(value)`.

```js
const partition = require('1-liners/partition');

const [even, odd] = partition([1, 2, 3, 4], n => n % 2 === 0); // => even: [2, 4], odd: [1, 3]
```

<div align="right"><sup>
	<a href="../tests/partition.js">Spec</a>
	•
	<a href="../module/partition.js">Source</a>: <code> (array, predicate) =&gt; array.reduce((result, item) =&gt; (result[Number(!predicate(item))].push(item), result), [[], []]);</code>
</sup></div>


### pick

Copies only specified `properties` from an `object` into a new object.

```js
const pick = require('1-liners/pick');

const object = {foo: 1, bar: 2, baz: 3};

pick(['foo', 'baz'], object);  // => {foo: 1, baz: 3}
```

<div align="right"><sup>
	<a href="../tests/pick.js">Spec</a>
	•
	<a href="../module/pick.js">Source</a>: <code> (properties, object) =&gt; Object.assign({}, ...properties.map(key =&gt; ({[key]: object[key]})));</code>
</sup></div>


### pipe

Pipe arguments through functions.

```js
const pipe = require('1-liners/pipe');

pipe(f, g)(1, 2) === g(f(1, 2));
```

<div align="right"><sup>
	<a href="../tests/pipe.js">Spec</a>
	•
	<a href="../module/pipe.js">Source</a>: <code> (f, g) =&gt; (...args) =&gt; g(f(...args));</code>
</sup></div>


### pipeAll

Pipe arguments through an array of functions.

```js
const pipeAll = require('1-liners/pipeAll');

pipeAll([f, g, h])(1, 2) === h(g(f(1, 2)));
```

<div align="right"><sup>
	<a href="../tests/pipeAll.js">Spec</a>
	•
	<a href="../module/pipeAll.js">Source</a>: <code> (fns) =&gt; fns.reduceRight( (f, g) =&gt; (...args) =&gt; f(g(...args)) );</code>
</sup></div>


### plus

Same as `a + b`.

```js
const plus = require('1-liners/plus');

plus(2, 8);      // => 10
plus('a', 'b');  // => 'ab'
```

<div align="right"><sup>
	<a href="../tests/plus.js">Spec</a>
	•
	<a href="../module/plus.js">Source</a>: <code> (a, b) =&gt; a + b;</code>
</sup></div>


### product

Returns the product of all items of an `array`.

```js
const product = require('1-liners/product');

product([2, 3, 4]);        // => 24
product([]);               // => 1
```

<div align="right"><sup>
	<a href="../tests/product.js">Spec</a>
	•
	<a href="../module/product.js">Source</a>: <code> (array) =&gt; array.reduce((a, b) =&gt; (a * b), 1);</code>
</sup></div>


### property

Same as `object[property]`

```js
const property = require('1-liners/property');

const object = {foo: 1};

property('foo', object);  // => 1
```

<div align="right"><sup>
	<a href="../tests/property.js">Spec</a>
	•
	<a href="../module/property.js">Source</a>: <code> (property, object) =&gt; object[property];</code>
</sup></div>


### propertyIsEnumerable

Returns a Boolean indicating whether the specified property is enumerable.

```js
const FOO = {
 'bar' : 'bar'
}
FOO.propertyIsEnumerable('bar') // => true
FOO.propertyIsEnumerable('length') // => false
```

<div align="right"><sup>
	<a href="../tests/propertyIsEnumerable.js">Spec</a>
	•
	<a href="../module/propertyIsEnumerable.js">Source</a>: <code> (obj, property) =&gt; obj.propertyIsEnumerable(property)</code>
</sup></div>


### push

Same as [push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) but immutable.

```js
const push = require('1-liners/push');

push(4, [1, 2, 3]); // => [1, 2, 3, 4]
```

<div align="right"><sup>
	<a href="../tests/push.js">Spec</a>
	•
	<a href="../module/push.js">Source</a>: <code> (element, arr) =&gt; [...arr, element];</code>
</sup></div>


### put

Same as `Object.assign({}, obj, {[key]: val})`

```js
const put = require('1-liners/put');

const object = {id: 1};

put('name', 'stoeffel', object);  // => { id: 1, name: 'stoeffel' }
```

<div align="right"><sup>
	<a href="../tests/put.js">Spec</a>
	•
	<a href="../module/put.js">Source</a>: <code> (key, val, obj) =&gt; Object.assign({}, obj, {[key]: val});</code>
</sup></div>


### range

A pure function to generate a range of numbers
from start(including) to end(excluding)

```js
const range = require('1-liners/range');

range(1, 5); // => [1, 2, 3, 4, 5]
```

<div align="right"><sup>
	<a href="../tests/range.js">Spec</a>
	•
	<a href="../module/range.js">Source</a>: <code> (start, end) =&gt; Array.from({length: (end - start)}, (v, k) =&gt; k + start);</code>
</sup></div>


### reduce

Same as `[1, 2, 3].reduce(sum)`.

```js
const reduce = require('1-liners/reduce');

reduce(sum, [1, 2, 3]); // => 6
```

<div align="right"><sup>
	<a href="../tests/reduce.js">Spec</a>
	•
	<a href="../module/reduce.js">Source</a>: <code> (func, arr) =&gt; arr.reduce(func);</code>
</sup></div>


### reduceRight

Same as `[1, 2, 3].reduceRight(sub)`.

```js
const reduceRight = require('1-liners/reduceRight');

reduceRight(sub, [1, 2, 3]); // => -4
```

<div align="right"><sup>
	<a href="../tests/reduceRight.js">Spec</a>
	•
	<a href="../module/reduceRight.js">Source</a>: <code> (reduce, arr) =&gt; arr.reduceRight(reduce);</code>
</sup></div>


### repeat

Same as `'STR'.repeat(1)`.

```js
const repeat = require('1-liners/repeat');

repeat(1, 'super') // => super
```

<div align="right"><sup>
	<a href="../tests/repeat.js">Spec</a>
	•
	<a href="../module/repeat.js">Source</a>: <code> (times, str) =&gt; str.repeat(times);</code>
</sup></div>


### replace

Same as `haystack.replace(needle, replace)`.

```js
const replace = require('1-liners/replace');

replace(/\d+/g, sub => `"${sub}"`, 'Items: 3,2'); // => Items: "3","2"
replace(':', '=', 'Items: 3,2'); // => Items= 3,2
```

<div align="right"><sup>
	<a href="../tests/replace.js">Spec</a>
	•
	<a href="../module/replace.js">Source</a>: <code> (needle, replace, haystack) =&gt; haystack.replace(needle, replace);</code>
</sup></div>


### search

Same as `'STR'.search(regexp)`.

```js
const search = require('1-liners/search');

search(/s/, 'super') // => 0
```

<div align="right"><sup>
	<a href="../tests/search.js">Spec</a>
	•
	<a href="../module/search.js">Source</a>: <code> (regexp, str) =&gt; str.search(regexp);</code>
</sup></div>


### shallowClone

Copy all properties of an object into a new plain object.

```js
import shallowClone from '1-liners/shallowClone';

const source = {
	value: 'value',
	reference: /reference/,
};
const target = shallowClone(source);

target === source                      // => false
target.value === source.value          // => true
target.reference === source.reference  // => true
```

<div align="right"><sup>
	<a href="../tests/shallowClone.js">Spec</a>
	•
	<a href="../module/shallowClone.js">Source</a>: <code> (object) =&gt; Object.assign({}, object);</code>
</sup></div>


### shave

Shave ensures that a function is called with n arguments.

```js
const shave = require('1-liners/shave');

map(parseInt, [0, 1.1, 2.2]); // => [0, NaN, NaN]
map(shave(1, parseInt), [0, 1.1, 2.2]); // => [0, 1, 2]
```

<div align="right"><sup>
	<a href="../tests/shave.js">Spec</a>
	•
	<a href="../module/shave.js">Source</a>: <code> (shave, f) =&gt; (...args) =&gt; f(...(args.slice(0, shave)));</code>
</sup></div>


### signum

Returns the [sign of a number](https://en.wikipedia.org/wiki/Signum_function). `1` if `n` is positive, `-1` if `n` is negative and `0` if `n` is `0`. Otherwise returns `NaN`.

```js
const signum = require('1-liners/signum');

signum(-5);         // => -1
signum(-Infinity);  // => -1

signum(10);         // => 1
signum(Infinity);   // => 1

signum(0);          // => 0
signum(-0);         // => 0
```

<div align="right"><sup>
	<a href="../tests/signum.js">Spec</a>
	•
	<a href="../module/signum.js">Source</a>: <code> (n) =&gt; (n === 0 ? 0 : (n &gt; 0 ? 1 : (n &lt; 0 ? -1 : NaN)));</code>
</sup></div>


### slice

Same as `'1-liners'.slice(2,4)` or `[1,2,3,4].slice(1,3)` 
Use in place of `'1-liners'.substring(2,6)`

```js
const slice = require('1-liners/slice');

slice(2, 6, '1-liners'); // => 'line'
slice(1, 3, [1,2,3,4]); // => [2,3]
```

<div align="right"><sup>
	<a href="../tests/slice.js">Spec</a>
	•
	<a href="../module/slice.js">Source</a>: <code> (startIndex, endIndex, arg) =&gt; arg.slice(Math.max(startIndex, 0), endIndex);</code>
</sup></div>


### some

Same as `[1,2,3].some(GreaterThan16)`

```js
const some = require('1-liners/some');

some(elem => elem > 16, [16,17,18]); // => true
```

<div align="right"><sup>
	<a href="../tests/some.js">Spec</a>
	•
	<a href="../module/some.js">Source</a>: <code> (some, arr) =&gt; arr.some(some);</code>
</sup></div>


### split

Same as `'1-liners'.split('-')`

```js
const split = require('1-liners/split');

split('-', '1-liners'); // => [1, 'liners']
```

<div align="right"><sup>
	<a href="../tests/split.js">Spec</a>
	•
	<a href="../module/split.js">Source</a>: <code> (split, str) =&gt; str.split(split);</code>
</sup></div>


### startsWith

Same as [`str.startsWith(searchString)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith).

```js
const startsWith = require('1-liners/startsWith');

startsWith('1', '1-liners');  // => true
startsWith('stoeffel', 'nope');  // => false
```

<div align="right"><sup>
	<a href="../tests/startsWith.js">Spec</a>
	•
	<a href="../module/startsWith.js">Source</a>: <code> (searchString, str) =&gt; str.startsWith(searchString);</code>
</sup></div>


### startsWithAt

Same as [`str.startsWith(searchString, position)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith).

```js
const startsWithAt = require('1-liners/startsWithAt');

startsWithAt(2, 'liners', '1-liners/startsWithAt');  // => true
startsWithAt(2, 'stoeffel', 'nope');  // => false
```

<div align="right"><sup>
	<a href="../tests/startsWithAt.js">Spec</a>
	•
	<a href="../module/startsWithAt.js">Source</a>: <code> (position, searchString, str) =&gt; str.startsWith(searchString, position);</code>
</sup></div>


### sum

Sums all items of an `array`.

```js
const sum = require('1-liners/sum');

sum([1, 2, 3]);        // => 6
sum([]);               // => 0
```

<div align="right"><sup>
	<a href="../tests/sum.js">Spec</a>
	•
	<a href="../module/sum.js">Source</a>: <code> (array) =&gt; array.reduce((a, b) =&gt; (a + b), 0);</code>
</sup></div>


### tail

Returns the tail of an array

```js
const tail = require('1-liners/tail');

tail([1, 2, 3]); // => [2, 3]
```

<div align="right"><sup>
	<a href="../tests/tail.js">Spec</a>
	•
	<a href="../module/tail.js">Source</a>: <code> ([,...tail]) =&gt; tail;</code>
</sup></div>


### take

Take n items of an array. Same as `arr.slice(0, n)`.

```js
const take = require('1-liners/take');

take(2, [1, 2, 3]); // => [1, 2]
```

<div align="right"><sup>
	<a href="../tests/take.js">Spec</a>
	•
	<a href="../module/take.js">Source</a>: <code> (take, arr) =&gt; arr.slice(0, take);</code>
</sup></div>


### takeUntil

Take items of an array until they fulfill a predicate.

```js
const takeUntil = require('1-liners/takeUntil');

takeUntil(i => i % 2 === 1, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
```

<div align="right"><sup>
	<a href="../tests/takeUntil.js">Spec</a>
	•
	<a href="../module/takeUntil.js">Source</a>: <code> (pred, arr) =&gt; arr.reduce((newArr, i) =&gt; { if (pred(i)) arr.length = 0; else newArr.push(i); return newArr; }, []);</code>
</sup></div>


### takeWhile

Take items of an array while they fulfill a predicate.

```js
const takeWhile = require('1-liners/takeWhile');

takeWhile(i => i % 2 === 0, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
```

<div align="right"><sup>
	<a href="../tests/takeWhile.js">Spec</a>
	•
	<a href="../module/takeWhile.js">Source</a>: <code> (pred, arr) =&gt; arr.reduce((newArr, i) =&gt; { if (!pred(i)) arr.length = 0; else newArr.push(i); return newArr; }, []);</code>
</sup></div>


### test

Same as [`regexObj.test(str)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test).

```js
const test = require('1-liners/test');
const haystack = 'hAyHAYhayneEdLEHayHAy';

test(haystack, /needle/);   // => false
test(haystack, /needle/i);  // => true
```

<div align="right"><sup>
	<a href="../tests/test.js">Spec</a>
	•
	<a href="../module/test.js">Source</a>: <code> (str, regexObj) =&gt; regexObj.test(str);</code>
</sup></div>


### times

Same as `a * b`

```js
const times = require('1-liners/times');

times(3, 2); // => 6
```

<div align="right"><sup>
	<a href="../tests/times.js">Spec</a>
	•
	<a href="../module/times.js">Source</a>: <code> (a, b) =&gt; a * b;</code>
</sup></div>


### toLowerCase

Same as `'STR'.toLowerCase()`.

```js
const toLowerCase = require('1-liners/toLowerCase');

toLowerCase('HALLO') // => 'hallo'
```

<div align="right"><sup>
	<a href="../tests/toLowerCase.js">Spec</a>
	•
	<a href="../module/toLowerCase.js">Source</a>: <code> (str) =&gt; str.toLowerCase();</code>
</sup></div>


### toType

typeOf is a function that return the true type of a variable.

```js
import toType from '1-liners/toType';

 toType({a: 4}); //"object"
 toType([1, 2, 3]); //"array"
 (function() {console.log(toType(arguments))})(); //arguments
 toType(new ReferenceError); //"error"
 toType(new Date); //"date"
 toType(/a-z/); //"regexp"
 toType(Math); //"math"
 toType(JSON); //"json"
 toType(new Number(4)); //"number"
 toType(new String("abc")); //"string"
 toType(new Boolean(true)); //"boolean"
```

<div align="right"><sup>
	<a href="../tests/toType.js">Spec</a>
	•
	<a href="../module/toType.js">Source</a>: <code> (obj) =&gt; ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();</code>
</sup></div>


### toUpperCase

Same as `'str'.toUpperCase()`.

```js
const toUpperCase = require('1-liners/toUpperCase');

toUpperCase('hallo') // => 'HALLO'
```

<div align="right"><sup>
	<a href="../tests/toUpperCase.js">Spec</a>
	•
	<a href="../module/toUpperCase.js">Source</a>: <code> (str) =&gt; str.toUpperCase();</code>
</sup></div>


### trim

Same as `'STR'.trim()`.

```js
const trim = require('1-liners/trim');

trim('  super  ') // => super
```

<div align="right"><sup>
	<a href="../tests/trim.js">Spec</a>
	•
	<a href="../module/trim.js">Source</a>: <code> (str) =&gt; str.trim();</code>
</sup></div>


### truncate

Truncate string when longer than maxLength and add the Unicode Character horizontal ellipsis keeping the total within maxLength.

```js
const truncate = require('1-liners/truncate');

truncate('super', 5) // => super
truncate('super', 4) // => sup…
```

<div align="right"><sup>
	<a href="../tests/truncate.js">Spec</a>
	•
	<a href="../module/truncate.js">Source</a>: <code> (str, maxLength) =&gt; str.length &gt; maxLength ? `${str.substr(0, maxLength - 1)}…` : str</code>
</sup></div>


### uncurry

Uncurry a function – collapse 2 lists of parameters into one.

```js
import uncurry from '1-liners/uncurry';

const f = (a) => (b) => a + b;
const fβ = uncurry(f);
fβ(1, 2);  // => 3

const g = (a) => (b, c) => a + b + c
const gβ = uncurry(g);
gβ(1, 2, 3);  // => 6
```

<div align="right"><sup>
	<a href="../tests/uncurry.js">Spec</a>
	•
	<a href="../module/uncurry.js">Source</a>: <code> (f) =&gt; (a, ...rest) =&gt; f(a)(...rest);</code>
</sup></div>


### uncurry3

Uncurry a function – collapse 3 lists of parameters into one.

```js
import uncurry3 from '1-liners/uncurry3';

const f = (a) => (b) => (c) => a + b + c;
const fβ = uncurry3(f);
fβ(1, 2, 3);  // => 6

const g = (a) => (b) => (c, d) => a + b + c + d;
const gβ = uncurry3(g);
gβ(1, 2, 3, 4);  // => 10
```

<div align="right"><sup>
	<a href="../tests/uncurry3.js">Spec</a>
	•
	<a href="../module/uncurry3.js">Source</a>: <code> (f) =&gt; (a, b, ...rest) =&gt; f(a)(b)(...rest);</code>
</sup></div>


### unfold

Builds a list from a seed value.

```js
const unfold = require('1-liners/unfold');

const fn = n => n < 20 ?  [n, n + 1] : false;
unfold(fn, 10); // => [10,11,12,13,14,15,16,17,18,19]

// range in terms of unfold
const range = (from, to) => unfold((seed) => seed < to ? [seed, seed + 1] : false, from);
range(1, 10); // => [1,2,3,4,5,6,7,8,9]
```

<div align="right"><sup>
	<a href="../tests/unfold.js">Spec</a>
	•
	<a href="../module/unfold.js">Source</a>: <code> function unfold (fn, seed, acc = [], next = fn(seed)) { return next ? unfold(fn, next[1], [...acc, next[0]]) : acc }</code>
</sup></div>


### uniq

Creates a duplicate-free version of an array.

```js
const uniq = require('1-liners/uniq');

uniq([1, 2, 2]); // => [1, 2]
```

<div align="right"><sup>
	<a href="../tests/uniq.js">Spec</a>
	•
	<a href="../module/uniq.js">Source</a>: <code> (array) =&gt; array.filter((value, index, self) =&gt; index === self.findIndex(other =&gt; other === value));</code>
</sup></div>


### uniqBy

Remove duplicates from an array of objects by invoking `iteratee` for each object.

```js
const get = require('1-liners/uniqBy');

let array = [{ id: 1 }, { id: 2 }, { id: 1 }];
uniqBy(array, o => o.id); // => [{ id: 1 }, { id: 2 }]
```

<div align="right"><sup>
	<a href="../tests/uniqBy.js">Spec</a>
	•
	<a href="../module/uniqBy.js">Source</a>: <code> (array, iteratee) =&gt; array.filter((value, index, self) =&gt; index === self.findIndex(other =&gt; iteratee(other) === iteratee(value)));</code>
</sup></div>


### values

Get all values of an object
Same as `Object.keys(obj).map(i => obj[i])`.

```js
const values = require('1-liners/values');

values({ 100: 'a', 2: 'b', 7: 'c' }); // => ['a', 'b', 'c']
values(['a', 'b', 'c']); // => ['a', 'b', 'c']
```

<div align="right"><sup>
	<a href="../tests/values.js">Spec</a>
	•
	<a href="../module/values.js">Source</a>: <code> (obj) =&gt; Object.keys(obj).map(i =&gt; obj[i]);</code>
</sup></div>


### xor

Same as `(x && !y) || (!x && y)`

```js
const xor = require('1-liners/xor');

xor(0, 1); // => 1
xor(1, 1); // => 0
```

<div align="right"><sup>
	<a href="../tests/xor.js">Spec</a>
	•
	<a href="../module/xor.js">Source</a>: <code> (x, y) =&gt; (x &amp;&amp; !y) || (!x &amp;&amp; y)</code>
</sup></div>

	
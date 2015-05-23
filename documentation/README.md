&nbsp;<p align="center"><img src="https://cdn.rawgit.com/stoeffel/1-liners/66775c8/logo.png" width="382px" height="125px" /></p>&nbsp;
# Documentation

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [always](#always)
- [and](#and)
- [between](#between)
- [bitAnd](#bitand)
- [bitOr](#bitor)
- [by](#by)
- [compose](#compose)
- [converge](#converge)
- [curry](#curry)
- [curryRight](#curryright)
- [dec](#dec)
- [equal](#equal)
- [every](#every)
- [explode](#explode)
- [filter](#filter)
- [flip](#flip)
- [forEach](#foreach)
- [greaterOrEqual](#greaterorequal)
- [greaterThan](#greaterthan)
- [head](#head)
- [identity](#identity)
- [ifElse](#ifelse)
- [implode](#implode)
- [inc](#inc)
- [isBetween](#isbetween)
- [isBoolean](#isboolean)
- [isFalse](#isfalse)
- [isFalsy](#isfalsy)
- [isFunction](#isfunction)
- [isNull](#isnull)
- [isNumber](#isnumber)
- [isObject](#isobject)
- [isString](#isstring)
- [isTrue](#istrue)
- [isTruthy](#istruthy)
- [isTypeOf](#istypeof)
- [isUndefined](#isundefined)
- [isUnknown](#isunknown)
- [join](#join)
- [last](#last)
- [length](#length)
- [lessOrEqual](#lessorequal)
- [lessThan](#lessthan)
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
- [not](#not)
- [nth](#nth)
- [or](#or)
- [pick](#pick)
- [pipe](#pipe)
- [plus](#plus)
- [pop](#pop)
- [property](#property)
- [reduce](#reduce)
- [reduceFrom](#reducefrom)
- [reduceFromRight](#reducefromright)
- [reduceRight](#reduceright)
- [replace](#replace)
- [shallowClone](#shallowclone)
- [shave](#shave)
- [some](#some)
- [split](#split)
- [tail](#tail)
- [take](#take)
- [takeUntil](#takeuntil)
- [takeWhile](#takewhile)
- [times](#times)
- [uncurry](#uncurry)
- [uncurry3](#uncurry3)
- [xor](#xor)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### always

Creates a function that always returns a given value

```js
var always = require('1-liners/always');

var T = always(true);
T(); // => true
T(); // => true

var fortyTwo = always(42);
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
var and = require('1-liners/and');

and(true, true); // => true
and(false, true); // => false
```

<div align="right"><sup>
	<a href="../tests/and.js">Spec</a>
	•
	<a href="../module/and.js">Source</a>: <code> (x, y) =&gt; x &amp;&amp; y;</code>
</sup></div>


### between

Return `number` if it’s greater than `min` and lower than `max`. Else return `min` or `max` respectively.

```js
var between = require('1-liners/between');

between(1, 10, 2.5);  // => 2.5
between(1, 10, -5);   // => 1
between(1, 10, 25);   // => 10
```

<div align="right"><sup>
	<a href="../tests/between.js">Spec</a>
	•
	<a href="../module/between.js">Source</a>: <code> (min, max, number) =&gt; (number &lt; min ? min : (number &gt; max ? max : number));</code>
</sup></div>


### bitAnd

Same as `a & b`.

```js
var bitAnd = require('1-liners/bitAnd');

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
var bitOr = require('1-liners/bitOr');

bitOr(0, 1); // => 1
bitOr(1, 1); // => 1
```

<div align="right"><sup>
	<a href="../tests/bitOr.js">Spec</a>
	•
	<a href="../module/bitOr.js">Source</a>: <code> (x, y) =&gt; x | y;</code>
</sup></div>


### by

Same as `a / b`

```js
var by = require('1-liners/by');

by(6, 2); // => 3
```

<div align="right"><sup>
	<a href="../tests/by.js">Spec</a>
	•
	<a href="../module/by.js">Source</a>: <code> (a, b) =&gt; a / b;</code>
</sup></div>


### compose

Compose a new function from two given functions.

```js
var compose = require('1-liners/compose');

compose(f, g)(1, 2) === f(g(1, 2));
```

<div align="right"><sup>
	<a href="../tests/compose.js">Spec</a>
	•
	<a href="../module/compose.js">Source</a>: <code> (f, g) =&gt; (...args) =&gt; f(g(...args));</code>
</sup></div>


### converge

Converge two functions into one.

```js
 var converge = require('1-liners/converge');

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
var dec = require('1-liners/dec');

dec(1); // => 0
```

<div align="right"><sup>
	<a href="../tests/dec.js">Spec</a>
	•
	<a href="../module/dec.js">Source</a>: <code> (val) =&gt; val - 1;</code>
</sup></div>


### equal

Same as `a === b`.

```js
var equal = require('1-liners/equal');

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
var every = require('1-liners/every');

every(elem => elem > 16, [16,17,18]); // => false
```

<div align="right"><sup>
	<a href="../tests/every.js">Spec</a>
	•
	<a href="../module/every.js">Source</a>: <code> (every, arr) =&gt; arr.every(every);</code>
</sup></div>


### explode

The opposite of [implode](#implode).

```js
var explode = require('1-liners/explode');

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
var filter = require('1-liners/filter');

filter(isOdd, [1, 2, 3]); // => [1, 3]
```

<div align="right"><sup>
	<a href="../tests/filter.js">Spec</a>
	•
	<a href="../module/filter.js">Source</a>: <code> (filter, arr) =&gt; arr.filter(filter);</code>
</sup></div>


### flip

Flip a function’s arguments.

```js
var flip = require('1-liners/flip');

var f = (a, b) => a / b;

flip(f)(2, 6);        // => 3
flip(flip(f))(6, 2);  // => 3
```

<div align="right"><sup>
	<a href="../tests/flip.js">Spec</a>
	•
	<a href="../module/flip.js">Source</a>: <code> (f) =&gt; (...args) =&gt; f(...args.reverse());</code>
</sup></div>


### forEach

Same as `[1, 2, 3].forEach(Math.sqrt)`.

```js
var forEach = require('1-liners/forEach');

forEach(i => console.log('Item: ' + i), [9, 25]); // => logs "Item: 9" and "Item: 25"
```

<div align="right"><sup>
	<a href="../tests/forEach.js">Spec</a>
	•
	<a href="../module/forEach.js">Source</a>: <code> (forEach, arr) =&gt; arr.forEach(forEach);</code>
</sup></div>


### greaterOrEqual

Same as `a >= b`.

```js
var greaterOrEqual = require('1-liners/greaterOrEqual');

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
var greaterThan = require('1-liners/greaterThan');

greaterThan(2, 1); // => true
greaterThan(2, 2); // => false
greaterThan(1, 2); // => false
```

<div align="right"><sup>
	<a href="../tests/greaterThan.js">Spec</a>
	•
	<a href="../module/greaterThan.js">Source</a>: <code> (x, y) =&gt; x &gt; y;</code>
</sup></div>


### head

Returns the first item of an array.

```js
var head = require('1-liners/head');

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
var identity = require('1-liners/identity');

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

<div align="right"><sup>
	<a href="../tests/ifElse.js">Spec</a>
	•
	<a href="../module/ifElse.js">Source</a>: <code> (pred, ifDo, elseDo=()=&gt;{}) =&gt; (...args) =&gt; pred(...args) ? ifDo(...args) : elseDo(...args);</code>
</sup></div>


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

<div align="right"><sup>
	<a href="../tests/implode.js">Spec</a>
	•
	<a href="../module/implode.js">Source</a>: <code> (func) =&gt; (args) =&gt; func(...args);</code>
</sup></div>


### inc

Same as `a + 1`

```js
var inc = require('1-liners/inc');

inc(1); // => 2
```

<div align="right"><sup>
	<a href="../tests/inc.js">Spec</a>
	•
	<a href="../module/inc.js">Source</a>: <code> (val) =&gt; val + 1;</code>
</sup></div>


### isBetween

Check if the `number` lies between `min` and `max`, inclusive.

```js
var isBetween = require('1-liners/isBetween');

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
var isBoolean = require('1-liners/isBoolean');

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
 var isFalse = require('1-liners/isFalse');

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
 var isFalsy = require('1-liners/isFalsy');

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
var isFunction = require('1-liners/isFunction');

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
var isNull = require('1-liners/isNull');

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
var isNumber = require('1-liners/isNumber');

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
var isObject = require('1-liners/isObject');

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


### isString

Same as `typeof value === 'string'`.

```js
var isString = require('1-liners/isString');

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
var isTrue = require('1-liners/isTrue');

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
var isTruthy = require('1-liners/isTruthy');

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
var isTypeOf = require('1-liners/isTypeOf');

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
var isUndefined = require('1-liners/isUndefined');

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
var isUnknown = require('1-liners/isUnknown');

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
var join = require('1-liners/join');

join('-', [1, 'liners']); // => '1-liners'
```

<div align="right"><sup>
	<a href="../tests/join.js">Spec</a>
	•
	<a href="../module/join.js">Source</a>: <code> (superglue, arr) =&gt; arr.join(superglue);</code>
</sup></div>


### last

Returns the last item of `array`.

```js
var last = require('1-liners/last');

last([1, 2, 3]);  // => 3
```

<div align="right"><sup>
	<a href="../tests/last.js">Spec</a>
	•
	<a href="../module/last.js">Source</a>: <code> (array) =&gt; array[array.length - 1];</code>
</sup></div>


### length

Returns the length of an array.

```js
 var length = require('1-liners/length');

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
var lessOrEqual = require('1-liners/lessOrEqual');

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
var lessThan = require('1-liners/lessThan');

lessThan(1, 2); // => true
lessThan(1, 1); // => false
lessThan(2, 1); // => false
```

<div align="right"><sup>
	<a href="../tests/lessThan.js">Spec</a>
	•
	<a href="../module/lessThan.js">Source</a>: <code> (x, y) =&gt; x &lt; y;</code>
</sup></div>


### looseEqual

Same as `a == b`.

```js
var looseEqual = require('1-liners/looseEqual');

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
var map = require('1-liners/map');

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
var match = require('1-liners/match');

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
var max = require('1-liners/max');

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
var min = require('1-liners/min');

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
var minus = require('1-liners/minus');

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
var nand = require('1-liners/nand');

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
var noop = require('1-liners/noop');

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
var nor = require('1-liners/nor');

nor(0, 0); // => true
nor(1, 0); // => false
```

<div align="right"><sup>
	<a href="../tests/nor.js">Spec</a>
	•
	<a href="../module/nor.js">Source</a>: <code> (x, y) =&gt; !(x || y);</code>
</sup></div>


### not

Same as `!a`.

```js
var not = require('1-liners/not');

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
var nth = require('1-liners/nth');

nth(1, [1, 2, 3]); // => 2
```

<div align="right"><sup>
	<a href="../tests/nth.js">Spec</a>
	•
	<a href="../module/nth.js">Source</a>: <code> (n, arr) =&gt; arr[n];</code>
</sup></div>


### or

Same as `a || b`.

```js
var or = require('1-liners/or');

or(true, true); // => true
or(false, true); // => true
or(false, false); // => false
```

<div align="right"><sup>
	<a href="../tests/or.js">Spec</a>
	•
	<a href="../module/or.js">Source</a>: <code> (a, b) =&gt; a || b;</code>
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
var pipe = require('1-liners/pipe');

pipe(f, g)(1, 2) === g(f(1, 2));
```

<div align="right"><sup>
	<a href="../tests/pipe.js">Spec</a>
	•
	<a href="../module/pipe.js">Source</a>: <code> (f, g) =&gt; (...args) =&gt; g(f(...args));</code>
</sup></div>


### plus

Same as `a + b`.

```js
var plus = require('1-liners/plus');

plus(2, 8);      // => 10
plus('a', 'b');  // => 'ab'
```

<div align="right"><sup>
	<a href="../tests/plus.js">Spec</a>
	•
	<a href="../module/plus.js">Source</a>: <code> (a, b) =&gt; a + b;</code>
</sup></div>


### pop

Similar to `array.pop()`, but immutable.

```js
import pop from '1-liners/pop';

const array = [1, 2, 3];

pop(array);  // => [1, 2]
array;       // => [1, 2, 3]
```

<div align="right"><sup>
	<a href="../tests/pop.js">Spec</a>
	•
	<a href="../module/pop.js">Source</a>: <code> (array) =&gt; array.slice(0, -1);</code>
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


### reduce

Same as `[1, 2, 3].reduce(sum)`.

```js
var reduce = require('1-liners/reduce');

reduce(sum, [1, 2, 3]); // => 6
```

<div align="right"><sup>
	<a href="../tests/reduce.js">Spec</a>
	•
	<a href="../module/reduce.js">Source</a>: <code> (reduce, arr) =&gt; arr.reduce(reduce);</code>
</sup></div>


### reduceFrom

Same as `[1, 2, 3].reduceFrom(sum, 8)`.

```js
var reduceFrom = require('1-liners/reduceFrom');

reduceFrom(sum, 8, [1, 2, 3]); // => 2
```

<div align="right"><sup>
	<a href="../tests/reduceFrom.js">Spec</a>
	•
	<a href="../module/reduceFrom.js">Source</a>: <code> (reduce, initial, arr) =&gt; arr.reduce(reduce, initial);</code>
</sup></div>


### reduceFromRight

Same as `[1, 2, 3].reduceFromRight(sub, 1)`.

```js
var reduceFromRight = require('1-liners/reduceFromRight');

reduceFromRight(sub, 1, [1, 2, 3]); // => -5
```

<div align="right"><sup>
	<a href="../tests/reduceFromRight.js">Spec</a>
	•
	<a href="../module/reduceFromRight.js">Source</a>: <code> (reduce, initial, arr) =&gt; arr.reduceRight(reduce, initial);</code>
</sup></div>


### reduceRight

Same as `[1, 2, 3].reduceRight(sub)`.

```js
var reduceRight = require('1-liners/reduceRight');

reduceRight(sub, [1, 2, 3]); // => -4
```

<div align="right"><sup>
	<a href="../tests/reduceRight.js">Spec</a>
	•
	<a href="../module/reduceRight.js">Source</a>: <code> (reduce, arr) =&gt; arr.reduceRight(reduce);</code>
</sup></div>


### replace

Same as `haystack.replace(needle, replace)`.

```js
var replace = require('1-liners/replace');

replace(/\d+/g, sub => `"${sub}"`, 'Items: 3,2'); // => Items: "3","2"
replace(':', '=', 'Items: 3,2'); // => Items= 3,2
```

<div align="right"><sup>
	<a href="../tests/replace.js">Spec</a>
	•
	<a href="../module/replace.js">Source</a>: <code> (needle, replace, haystack) =&gt; haystack.replace(needle, replace);</code>
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
var shave = require('1-liners/shave');

map(parseInt, [0, 1.1, 2.2]); // => [0, NaN, NaN]
map(shave(1, parseInt), [0, 1.1, 2.2]); // => [0, 1, 2]
```

<div align="right"><sup>
	<a href="../tests/shave.js">Spec</a>
	•
	<a href="../module/shave.js">Source</a>: <code> (shave, f) =&gt; (...args) =&gt; f(...(args.slice(0, shave)));</code>
</sup></div>


### some

Same as `[1,2,3].some(GreaterThan16)`

```js
var some = require('1-liners/some');

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
var split = require('1-liners/split');

split('-', '1-liners'); // => [1, 'liners']
```

<div align="right"><sup>
	<a href="../tests/split.js">Spec</a>
	•
	<a href="../module/split.js">Source</a>: <code> (split, str) =&gt; str.split(split);</code>
</sup></div>


### tail

Returns the tail of an array

```js
 var tail = require('1-liners/tail');

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
var take = require('1-liners/take');

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
var takeUntil = require('1-liners/takeUntil');

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
var takeWhile = require('1-liners/takeWhile');

takeWhile(i => i % 2 === 0, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
```

<div align="right"><sup>
	<a href="../tests/takeWhile.js">Spec</a>
	•
	<a href="../module/takeWhile.js">Source</a>: <code> (pred, arr) =&gt; arr.reduce((newArr, i) =&gt; { if (!pred(i)) arr.length = 0; else newArr.push(i); return newArr; }, []);</code>
</sup></div>


### times

Same as `a * b`

```js
var times = require('1-liners/times');

times(3, 2); // => 6
```

<div align="right"><sup>
	<a href="../tests/times.js">Spec</a>
	•
	<a href="../module/times.js">Source</a>: <code> (a, b) =&gt; a * b;</code>
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


### xor

Same as `(x && !y) || (!x && y)`

```js
var xor = require('1-liners/xor');

xor(0, 1); // => 1
xor(1, 1); // => 0
```

<div align="right"><sup>
	<a href="../tests/xor.js">Spec</a>
	•
	<a href="../module/xor.js">Source</a>: <code> (x, y) =&gt; (x &amp;&amp; !y) || (!x &amp;&amp; y)</code>
</sup></div>

	
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

## License

MIT © [stoeffel](http://schtoeffel.ch)

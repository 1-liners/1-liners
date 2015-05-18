import {ok} from 'assert';
import isObject from '../isObject';

test('#isObject', () => {
	ok(isObject({}));
	ok(isObject([]));
	ok(isObject(/anything else/));

	ok(!isObject(undefined));
	ok(!isObject(null));
	ok(!isObject(false));
	ok(!isObject(true));
	ok(!isObject(''));
	ok(!isObject('1'));
	ok(!isObject(0));
	ok(!isObject(1));
	ok(!isObject(NaN));
	ok(!isObject(Infinity));
	ok(!isObject('non-empty string'));
	ok(!isObject(() => {}));
	ok(!isObject(function named() {}));
});

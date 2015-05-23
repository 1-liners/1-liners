import {ok} from 'assert';
import isPlainObject from '../isPlainObject';

test('#isPlainObject', () => {
	ok(isPlainObject({}));
	ok(isPlainObject(Object.create(null)));

	ok(!isPlainObject(undefined));
	ok(!isPlainObject(null));
	ok(!isPlainObject(false));
	ok(!isPlainObject(true));
	ok(!isPlainObject(''));
	ok(!isPlainObject('1'));
	ok(!isPlainObject(0));
	ok(!isPlainObject(1));
	ok(!isPlainObject(NaN));
	ok(!isPlainObject(Infinity));
	ok(!isPlainObject('non-empty string'));
	ok(!isPlainObject([]));
	ok(!isPlainObject(() => {}));
	ok(!isPlainObject(function named() {}));
	ok(!isPlainObject(/anything else/));
});

import {ok} from 'assert';
import isString from '../isString';

test('#isString', () => {
	ok(isString(''));
	ok(isString('non-empty string'));

	ok(!isString(undefined));
	ok(!isString(null));
	ok(!isString(0));
	ok(!isString(1));
	ok(!isString(false));
	ok(!isString(true));
	ok(!isString(NaN));
	ok(!isString(Infinity));
	ok(!isString(() => {}));
	ok(!isString(function named() {}));
	ok(!isString([]));
	ok(!isString({}));
	ok(!isString(/anything else/));
});

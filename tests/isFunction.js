import {ok} from 'assert';
import isFunction from '../isFunction';

test('#isFunction', () => {
	ok(isFunction(() => {}));
	ok(isFunction(function named() {}));

	ok(!isFunction(undefined));
	ok(!isFunction(null));
	ok(!isFunction(0));
	ok(!isFunction(1));
	ok(!isFunction(false));
	ok(!isFunction(true));
	ok(!isFunction(''));
	ok(!isFunction('non-empty string'));
	ok(!isFunction(NaN));
	ok(!isFunction(Infinity));
	ok(!isFunction([]));
	ok(!isFunction({}));
	ok(!isFunction(new Date()));
});

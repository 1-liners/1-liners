import {ok} from 'assert';
import isBoolean from '../isBoolean';

test('#isBoolean', () => {
	ok(isBoolean(false));
	ok(isBoolean(true));

	ok(!isBoolean(undefined));
	ok(!isBoolean(null));
	ok(!isBoolean(''));
	ok(!isBoolean('1'));
	ok(!isBoolean(0));
	ok(!isBoolean(1));
	ok(!isBoolean(NaN));
	ok(!isBoolean(Infinity));
	ok(!isBoolean('non-empty string'));
	ok(!isBoolean(() => {}));
	ok(!isBoolean(function named() {}));
	ok(!isBoolean([]));
	ok(!isBoolean({}));
	ok(!isBoolean(/anything else/));
});

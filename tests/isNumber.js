import {ok} from 'assert';
import isNumber from '../isNumber';

test('#isNumber', () => {
	ok(isNumber(0));
	ok(isNumber(1));
	ok(isNumber(NaN));
	ok(isNumber(Infinity));

	ok(!isNumber(undefined));
	ok(!isNumber(null));
	ok(!isNumber(false));
	ok(!isNumber(true));
	ok(!isNumber(''));
	ok(!isNumber('1'));
	ok(!isNumber('non-empty string'));
	ok(!isNumber(() => {}));
	ok(!isNumber(function named() {}));
	ok(!isNumber([]));
	ok(!isNumber({}));
	ok(!isNumber(/anything else/));
});

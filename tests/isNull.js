import {ok} from 'assert';
import isNull from '../isNull';

test('#isNull', () => {
	ok(isNull(null));

	ok(!isNull(0));
	ok(!isNull(1));
	ok(!isNull(false));
	ok(!isNull(true));
	ok(!isNull(''));
	ok(!isNull('non-empty string'));
	ok(!isNull(undefined));
	ok(!isNull(NaN));
	ok(!isNull(Infinity));
	ok(!isNull([]));
	ok(!isNull({}));
	ok(!isNull(new Date()));
});

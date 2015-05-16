import {ok} from 'assert';
import isUndefined from '../isUndefined';

test('#isUndefined', () => {
	ok(isUndefined(undefined));

	ok(!isUndefined(null));
	ok(!isUndefined(0));
	ok(!isUndefined(1));
	ok(!isUndefined(false));
	ok(!isUndefined(true));
	ok(!isUndefined(''));
	ok(!isUndefined('non-empty string'));
	ok(!isUndefined(NaN));
	ok(!isUndefined(Infinity));
	ok(!isUndefined([]));
	ok(!isUndefined({}));
	ok(!isUndefined(new Date()));
});

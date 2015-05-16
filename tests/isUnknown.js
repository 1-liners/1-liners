import {ok} from 'assert';
import isUnknown from '../isUnknown';

test('#isUnknown', () => {
	ok(isUnknown(null));
	ok(isUnknown(undefined));

	ok(!isUnknown(0));
	ok(!isUnknown(1));
	ok(!isUnknown(false));
	ok(!isUnknown(true));
	ok(!isUnknown(''));
	ok(!isUnknown('non-empty string'));
	ok(!isUnknown(NaN));
	ok(!isUnknown(Infinity));
	ok(!isUnknown([]));
	ok(!isUnknown({}));
	ok(!isUnknown(new Date()));
});

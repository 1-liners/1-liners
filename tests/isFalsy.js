import {ok} from 'assert';
import isFalsy from '../isFalsy';

test('#isFalsy', () => {
	ok(!isFalsy('yes'));
	ok(!isFalsy(true));
	ok(!isFalsy([]));

	ok(isFalsy(''));
	ok(isFalsy(0));
	ok(isFalsy(false));
});

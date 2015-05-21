import {ok} from 'assert';
import isTrue from '../isTrue';

test('#isTrue', () => {
	ok(isTrue(true));

	ok(!isTrue('yes'));
	ok(!isTrue([]));
	ok(!isTrue(''));
	ok(!isTrue(0));
	ok(!isTrue(false));
});

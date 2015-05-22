import {ok} from 'assert';
import isFalse from '../isFalse';

test('#isFalse', () => {
	ok(isFalse(false));

	ok(!isFalse('yes'));
	ok(!isFalse(true));
	ok(!isFalse([]));
	ok(!isFalse(''));
	ok(!isFalse(0));
});

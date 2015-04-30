import {ok} from 'assert';
import isTruthy from '../isTruthy';

test('#isTruthy', () => {
	ok(isTruthy('yes'));
	ok(isTruthy(true));
	ok(isTruthy([]));

	ok(!isTruthy(''));
	ok(!isTruthy(0));
	ok(!isTruthy(false));
});

import {equal} from 'assert';
import max from '../max';

test('#max', () => {
	equal(max(3, 6), 6);
	equal(max(6, 3), 6);

	equal([3, 6, 9].reduce(max), 9);
});

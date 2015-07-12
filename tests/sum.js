import { equal } from 'assert';
import sum from '../sum';

test('#sum', () => {
	equal(sum([1, 2, 3]), 6);
	equal(sum([]), 0);
	equal(sum([{valueOf: () => 10}]), 10);
});

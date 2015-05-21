import { equal, deepEqual } from 'assert';
import head from '../head';

test('#head', () => {
	let arr = [0, 1, 2];
	equal(head(arr), 0);
	deepEqual(arr, [0, 1, 2]);
});

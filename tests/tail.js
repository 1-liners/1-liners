import { deepEqual } from 'assert';
import tail from '../tail';

test('#tail', () => {
	let arr = [0, 1, 2];
	deepEqual(tail(arr), [1, 2]);
	deepEqual(arr, [0, 1, 2]);
});

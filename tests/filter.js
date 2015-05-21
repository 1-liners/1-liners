import { deepEqual } from 'assert';
import filter from '../filter';

let isOdd = (x) => x % 2 !== 0;

test('#filter', () => {
	let arr = [1, 2, 3, 4, 5];
	deepEqual(filter(isOdd, arr), [1, 3, 5]);
	deepEqual(arr, [1, 2, 3, 4, 5]);
});

import { equal, deepEqual } from 'assert';
import reduce from '../reduce';

let sub = (x, y) => x - y;
test('#reduce', () => {
	let arr = [1, 2, 3, 4];
	equal(reduce(sub, arr), -8);
	deepEqual(arr, [1, 2, 3, 4]);
});

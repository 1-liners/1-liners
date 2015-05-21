import { equal, deepEqual } from 'assert';
import reduceFromRight from '../reduceFromRight';

let sub = (x, y) => x - y;
test('#reduceFromRight', () => {
	let arr = [1, 2, 3, 4];
	equal(reduceFromRight(sub, 10, arr), 0);
	deepEqual(arr, [1, 2, 3, 4]);
});

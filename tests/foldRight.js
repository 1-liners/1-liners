import { equal, deepEqual } from 'assert';
import foldRight from '../foldRight';

let sub = (x, y) => x - y;
test('#foldRight', () => {
	let arr = [1, 2, 3, 4];
	equal(foldRight(sub, 10, arr), 0);
	deepEqual(arr, [1, 2, 3, 4]);
});

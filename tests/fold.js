import { equal, deepEqual } from 'assert';
import fold from '../fold';

let sub = (x, y) => x - y;
test('#fold', () => {
	let arr = [1, 2, 3, 4];
	equal(fold(sub, 8, arr), -2);
	deepEqual(arr, [1, 2, 3, 4]);
});

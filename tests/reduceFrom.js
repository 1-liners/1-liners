import { equal, deepEqual } from 'assert';
import reduceFrom from '../reduceFrom';

let sub = (x, y) => x - y;
test('#reduceFrom', () => {
	let arr = [1, 2, 3, 4];
	equal(reduceFrom(sub, 8, arr), -2);
	deepEqual(arr, [1, 2, 3, 4]);
});

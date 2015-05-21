import { deepEqual } from 'assert';
import map from '../map';

test('#map', () => {
	let arr = [9, 16, 25];
	deepEqual(map(Math.sqrt, arr), [3, 4, 5]);
	deepEqual(arr, [9, 16, 25]);
});

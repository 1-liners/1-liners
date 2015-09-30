import { deepEqual } from 'assert';
import flatMap from '../flatMap';

test('#flatMap', () => {
	let arr = [1, 2, 3];
	deepEqual(flatMap((x) => [x, x], arr), [1, 1, 2, 2, 3, 3]);
	deepEqual(arr, [1, 2, 3]);
});

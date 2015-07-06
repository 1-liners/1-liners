import { deepEqual } from 'assert';
import push from '../push';

test('#push', () => {
	let arr = [0, 1, 2];
	let clone = [0, 1, 2];
	deepEqual(push(3, arr), [0, 1, 2, 3]);

	clone.push(3);
	deepEqual(push(3, arr), clone);
	deepEqual(arr, [0, 1, 2]);
});

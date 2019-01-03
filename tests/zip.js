import { equal, deepEqual } from 'assert';
import zip from '../zip';

test('#zip', () => {
	let result = zip(['a', 'b'], [1, 2], [true, false]);
	equal(result.length, 2);
	deepEqual(result[0], ['a', 1, true]);
	deepEqual(result[1], ['b', 2, false]);
	result = zip([], ['x']);
	equal(result.length, 1);
	deepEqual(result[0], [undefined, 'x']);
});

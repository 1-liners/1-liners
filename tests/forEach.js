import { deepEqual } from 'assert';
import forEach from '../forEach';

test('#forEach', () => {
	let result = [];
	forEach(i => result.push(Math.sqrt(i)), [9, 16, 25])
	deepEqual(result, [3, 4, 5]);
});

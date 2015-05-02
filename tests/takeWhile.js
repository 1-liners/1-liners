import { deepEqual } from 'assert';
import takeWhile from '../takeWhile';

test('#takeWhile', () => {
	deepEqual(takeWhile(i => i % 2 === 0, [2, 4, 6, 5, 8, 2]), [2, 4, 6]);
});

import { deepEqual } from 'assert';
import takeUntil from '../takeUntil';

test('#takeUntil', () => {
	deepEqual(takeUntil(i => i % 2 === 1, [2, 4, 6, 5, 8, 2]), [2, 4, 6]);
});

import { deepEqual } from 'assert';
import take from '../take';

test('#take', () => {
	deepEqual(take(0, [0, 1, 2]), []);
	deepEqual(take(1, [0, 1, 2]), [0]);
	deepEqual(take(2, [0, 1, 2]), [0, 1]);
	deepEqual(take(3, [0, 1, 2]), [0, 1, 2]);
	deepEqual(take(4, [0, 1, 2]), [0, 1, 2]);
});

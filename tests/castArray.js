import { deepEqual } from 'assert';
import castArray from '../castArray';

test('#castArray', () => {
	let arr = [0, 1, 2];
	deepEqual(castArray(arr), [0, 1, 2]);
	deepEqual(castArray(1), [1]);
	deepEqual(castArray(null), [null]);
});

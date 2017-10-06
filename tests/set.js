import { deepEqual } from 'assert';
import set from '../set';

test.only('#set', () => {
	deepEqual(set({}, 'a.b.c', 42), { a: { b: { c: 42 } } });
});

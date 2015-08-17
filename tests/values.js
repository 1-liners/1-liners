import { deepEqual } from 'assert';
import values from '../values';

test('#values', () => {
	const obj = { 100: 'a', 2: 'b', 7: 'c' };
  deepEqual(values(obj), ['b', 'c', 'a']);
  deepEqual(values({}), []);
  deepEqual(values([1, 'b', 2]), [1, 'b', 2]);
});

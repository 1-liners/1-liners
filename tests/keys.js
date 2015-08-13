import { deepEqual } from 'assert';
import keys from '../keys';

test('#keys', () => {
	const obj = { 100: 'a', 2: 'b', 7: 'c' };
  deepEqual(keys(obj), ['2', '7', '100']);
  deepEqual(keys({}), []);
  deepEqual(keys([1, 2, 3, 4]), [0, 1, 2, 3]);
});

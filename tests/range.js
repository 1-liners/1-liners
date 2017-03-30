import { deepEqual } from 'assert';
import range from '../range';

test('#range', () => {
  deepEqual(range(1, 3), [1, 2]);
  deepEqual(range(0, 3), [0, 1, 2]);
  deepEqual(range(), []);
});

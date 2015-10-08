import { equal, deepEqual } from 'assert';
import slice from '../slice';

test('#slice', () => {
  const array = [1, 2, 3, 4, 5];
  const string = '1-liners';

  equal(slice(2, 6, string), 'line');
  equal(slice(-1, 3, string), '1-l');
  deepEqual(slice(1, 3, array), [2, 3]);
  deepEqual(slice(-1, 3, array), [1, 2, 3]);
});

import { deepEqual } from 'assert';
import compact from '../compact';

test('#compact', () => {
  deepEqual(compact([1, 2, false, 45]), [1, 2, 45]);
  deepEqual(compact([2, false, 45, undefined, 32, null, 67]), [2, 45, 32, 67]);
  deepEqual(compact([]), []);
  deepEqual(compact([undefined, false, null]), []);
});

import { equal } from 'assert';
import findKey from '../findKey';

test('#findKey', () => {
  const data = { a: 1, b: 2, c: 3 };
  equal(findKey(x => x > 2, data), 'c');
  equal(findKey(x => x > 2, {}), undefined);
  equal(findKey(x => x > 0, data), 'a');
  equal(findKey(x => x > 4, data), undefined);
});

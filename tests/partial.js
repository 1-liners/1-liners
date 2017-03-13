import { equal } from 'assert';
import partial from '../partial';

test('#partial', () => {
  const add = (a, b, c) => a + b + c; 
  const add5 = partial(add, 2, 3)
  const add1 = partial(add, 1)

  equal(add5(5), 10);
  equal(add1(2, 3), 6);
});

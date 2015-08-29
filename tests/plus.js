import { equal } from 'assert';
import plus from '../plus';

test('#plus', () => {
  equal(plus(0, 2), 2);
  equal(plus(2, 4, 6, ...[8, 10]), 30);
});

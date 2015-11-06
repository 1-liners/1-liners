import { equal } from 'assert';
import includes from '../includes';

test('#includes', () => {
  let str = 'Blue Whale';
  equal(includes('blue', str), false);
  equal(includes('Blue', str), true);
});

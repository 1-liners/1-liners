import { equal } from 'assert';
import always from '../always';

test('#always', () => {
  equal(always(true)(), true);
  equal(always(42)(), 42);
  equal(always('1-liners')(), '1-liners');
});

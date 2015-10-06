import { equal } from 'assert';
import toLowerCase from '../toLowerCase';

test('#toLowerCase', () => {
  equal(toLowerCase('SOMETHING UPPERCASE'), 'something uppercase');
  equal(toLowerCase('1-LINERS'), '1-liners');
});

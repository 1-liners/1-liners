import { equal } from 'assert';
import substrTo from '../substrTo';

test('#substrTo', () => {
  equal(substrTo(0, 3, 'two fish'), 'two');
  equal(substrTo(4, 1, 'two fish'), 'f');
  equal(substrTo(100, 0, 'two fish'), '');
  equal(substrTo(0, 0, 'two fish'), '');
});

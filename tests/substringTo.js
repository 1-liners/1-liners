import { equal } from 'assert';
import substringTo from '../substringTo';

test('#substringTo', () => {
  equal(substringTo(0, 4, 'blue fish'), 'blue');
  equal(substringTo(5, 6, 'blue fish'), 'f');
  equal(substringTo(100, 0, 'blue fish'), 'blue fish');
  equal(substringTo(0, 0, 'blue fish'), '');
});

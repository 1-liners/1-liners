import { equal } from 'assert';
import substring from '../substring';

test('#substring', () => {
  equal(substring(0, 'red fish'), 'red fish');
  equal(substring(4, 'red fish'), 'fish');
  equal(substring(100, 'red fish'), '');
});

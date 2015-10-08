import { equal } from 'assert';
import toUpperCase from '../toUpperCase';

test('#toUpperCase', () => {
  equal(toUpperCase('something lowercase'), 'SOMETHING LOWERCASE');
  equal(toUpperCase('1-liners'), '1-LINERS');
});

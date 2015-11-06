import { equal } from 'assert';
import search from '../search';

test('#search', () => {
  equal(search(/s/, 'hallo'), -1);
  equal(search(/h/, 'hallo'), 0);
});

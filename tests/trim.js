import { equal } from 'assert';
import trim from '../trim';

test('#trim', () => {
  equal(trim('  hallo  '), 'hallo');
  equal(trim('  hallo'), 'hallo');
  equal(trim('hallo  '), 'hallo');
});

import { equal } from 'assert';
import truncate from '../truncate';

test('#truncate', () => {
  equal(truncate('hallo', 6), 'hallo');
  equal(truncate('hallo', 4), 'hal…');
  equal(truncate('hallo', 1), '…');
});

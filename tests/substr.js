import { equal } from 'assert';
import substr from '../substr';

test('#substr', () => {
  equal(substr(0, 'one fish'), 'one fish');
  equal(substr(4, 'one fish'), 'fish');
  equal(substr(-4, 'one fish'), 'fish');
  equal(substr(100, 'one fish'), '');
});

import { equal } from 'assert';
import lastIndexOf from '../lastIndexOf';

test('#lastIndexOf', () => {
  equal(lastIndexOf('w', 'wow'), 2);
  equal(lastIndexOf('z', '1-liners'), -1);
  equal(lastIndexOf('az', 'razzmatazz'), 7);
});

import { equal } from 'assert';
import isBetween from '../isBetween';

test('#isBetween', () => {
  equal( isBetween(1, 10, 3)    , true   );
  equal( isBetween(1, 10, 2.5)  , true   );
  equal( isBetween(1, 10, -5)   , false  );
  equal( isBetween(1, 10, 25)   , false  );
});

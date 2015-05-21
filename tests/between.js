import { equal } from 'assert';
import between from '../between';

test('#between', () => {
  equal( between(1, 10, 3)    , 3    );
  equal( between(1, 10, 2.5)  , 2.5  );
  equal( between(1, 10, -5)   , 1    );
  equal( between(1, 10, 25)   , 10   );
});

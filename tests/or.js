import {
  ok
}
from 'assert';
import or from '../or';

test('#or', () => {
  ok(or(true, true));
  ok(or(false, true));
  ok(or(true, false));
  ok(!or(false, false));
});

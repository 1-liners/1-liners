import {
  ok
}
from 'assert';
import bitAnd from '../bitAnd';

test('#bitAnd', () => {
  ok(bitAnd(true, true));
  ok(!bitAnd(false, true));
  ok(!bitAnd(true, false));
  ok(!bitAnd(false, false));
});

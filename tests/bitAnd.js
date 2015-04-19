import {
  ok
}
from 'assert';
import bitAnd from '../src/bitAnd';

test('#bitAnd', () => {
  ok(bitAnd(true, true));
  ok(!bitAnd(false, true));
  ok(!bitAnd(true, false));
  ok(!bitAnd(false, false));
});

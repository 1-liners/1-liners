import {
  ok
}
from 'assert';
import and from '../src/and';

test('#and', () => {
  ok(and(true, true));
  ok(!and(false, true));
  ok(!and(true, false));
  ok(!and(false, false));
});

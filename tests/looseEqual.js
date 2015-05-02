import { ok } from 'assert';
import looseEqual from '../looseEqual';

test('#looseEqual', () => {
  ok(looseEqual(true, true));
  ok(!looseEqual(false, true));
  ok(looseEqual(1, 1));
  ok(looseEqual(1, true));
  ok(looseEqual(0, false));
});

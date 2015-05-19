import { ok } from 'assert';
import greaterOrEqual from '../greaterOrEqual';

test('#greaterOrEqual', () => {
  ok(greaterOrEqual(2, 1));
  ok(greaterOrEqual(1, 1));
  ok(!greaterOrEqual(1, 2));
});

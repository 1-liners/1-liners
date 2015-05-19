import { ok } from 'assert';
import greaterThan from '../greaterThan';

test('#greaterThan', () => {
  ok(greaterThan(2, 1));
  ok(!greaterThan(1, 1));
  ok(!greaterThan(1, 2));
});

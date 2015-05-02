import { ok } from 'assert';
import equal from '../equal';

test('#equal', () => {
  ok(equal(true, true));
  ok(!equal(false, true));
  ok(equal(1, 1));
  ok(!equal(1, true));
});

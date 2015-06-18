import { ok } from 'assert';
import ourTest from '../test';

test('#test', () => {
  ok(ourTest('hayhayhayneedlehayhay', /needle/));
  ok(ourTest('hAyHAYhayneEdLEHayHAy', /needle/i));

  ok(!ourTest('hayhayhayneedlehayhay', /not there/));
});

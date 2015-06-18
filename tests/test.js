import { ok, notOk } from 'assert';
import ourTest from '../test';

test('#test', () => {
  ok(ourTest('hayhayhayneedlehayhay', /needle/));
  ok(ourTest('hAyHAYhayneEdLEHayHAy', /needle/i));

  notOk(ourTest('hayhayhayneedlehayhay', /not there/));
});

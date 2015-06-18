import { ok, notOk } from 'assert';
import test from '../test';

test('#test', () => {
  ok(test('hayhayhayneedlehayhay', /needle/));
  ok(test('hAyHAYhayneEdLEHayHAy', /needle/i));

  notOk(test('hayhayhayneedlehayhay', /not there/));
});

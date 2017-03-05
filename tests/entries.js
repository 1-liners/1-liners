import { deepEqual } from 'assert';
import entries from '../entries';

test('#entries', () => {
  deepEqual(entries({ foo: 'bar', baz: 42 }), [ ['foo', 'bar'], ['baz', 42] ]);
  deepEqual(entries(['foo', 'bar', 'baz']), [ [0, 'foo'], [1, 'bar'], [2, 'baz'] ]);
  deepEqual(entries({ foo: 'bar', [Symbol('baz')]: 42 }), [ ['foo', 'bar'] ]);
  deepEqual(entries('foo'), [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]);
  deepEqual(entries(Object.create({}, { getFoo: function() { return this.foo; } })), []);
});

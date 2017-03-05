import {ok} from 'assert';
import toType from '../toType';

test('#toType', () => {
    ok(toType() === 'undefined');
    ok(toType([]) === 'array');
    ok(toType(/anything else/) === 'regexp');
    ok(toType(null) === 'null');
    ok(toType(undefined) === 'undefined');
    ok(toType(new ReferenceError) === 'error');
    ok(toType(new Date) === 'date');
    ok(toType(true) === 'boolean');
    ok(toType('abc') === 'string');
    ok(toType(function named() {}) === 'function');
    ok(toType({a:1}) === 'object');
});

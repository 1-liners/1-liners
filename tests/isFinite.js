import {ok} from 'assert';
import isFinite from '../isFinite';

test('#isFinite', () => {
	ok(isFinite(23));
	ok(!isFinite(Infinity));
	ok(isFinite(NaN));
	ok(isFinite(-44));
});

import {ok} from 'assert';
import isNaN from '../isNaN';

test('#isNaN', () => {
	ok(!isNaN(23));
	ok(!isNaN(Infinity));
	ok(isNaN(NaN));
});

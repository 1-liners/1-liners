import {ok} from 'assert';
import isTypeOf from '../isTypeOf';

test('#isTypeOf', () => {
	ok(isTypeOf('boolean', false));
	ok(isTypeOf('boolean', true));
	ok(isTypeOf('string', '1-liners'));
	ok(isTypeOf('number', 1));
	ok(isTypeOf('object', {}));

	ok(!isTypeOf('boolean', undefined));
	ok(!isTypeOf('boolean', null));
	ok(!isTypeOf('boolean', ''));
	ok(!isTypeOf('boolean', '1'));
	ok(!isTypeOf('boolean', 0));
	ok(!isTypeOf('boolean', 1));
	ok(!isTypeOf('boolean', NaN));
	ok(!isTypeOf('boolean', Infinity));
	ok(!isTypeOf('boolean', 'non-empty string'));
	ok(!isTypeOf('boolean', () => {}));
	ok(!isTypeOf('boolean', function named() {}));
	ok(!isTypeOf('boolean', []));
	ok(!isTypeOf('boolean', {}));
	ok(!isTypeOf('boolean', /anything else/));
});

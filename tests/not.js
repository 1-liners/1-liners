import { ok } from 'assert';
import not from '../not';

test('#not', () => {
	ok(!not(true));
	ok(not(false));
});

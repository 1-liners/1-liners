import { ok } from 'assert';
import not from '../src/not';

test('#not', () => {
	ok(!not(true));
	ok(not(false));
});

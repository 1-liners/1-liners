import { ok } from 'assert';
import startsWith from '../startsWith';

test('#startsWith', () => {
	ok(startsWith('1', '1-liners'));
	ok(!startsWith('stoeffel', 'nope'));
});

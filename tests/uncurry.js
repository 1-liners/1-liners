import { equal } from 'assert';
import uncurry from '../uncurry';

test('#uncurry', () => {
	const f = (a) => (b) => a + b;
	equal(uncurry(f)(1, 2), 3);

	const g = (a) => (b, c) => a + b + c;
	equal(uncurry(g)(1, 2, 3), 6);
});

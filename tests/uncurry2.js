import { equal } from 'assert';
import uncurry2 from '../uncurry2';

test('#uncurry2', () => {
	const f = (a) => (b) => a + b;
	equal(uncurry2(f)(1, 2), 3);

	const g = (a) => (b, c) => a + b + c;
	equal(uncurry2(g)(1, 2, 3), 6);
});

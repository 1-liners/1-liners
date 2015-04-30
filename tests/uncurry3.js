import { equal } from 'assert';
import uncurry3 from '../uncurry3';

test('#uncurry3', () => {
	const f = (a) => (b) => (c) => a + b * c;
	equal(uncurry3(f)(1, 2, 3), 7);

	const g = (a) => (b) => (c, d) => a + b * c - d;
	equal(uncurry3(g)(1, 2, 3, 4), 3);
});

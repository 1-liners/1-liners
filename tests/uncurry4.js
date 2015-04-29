import { equal } from 'assert';
import uncurry4 from '../uncurry4';

test('#uncurry4', () => {
	const f = (a) => (b) => (c) => (d) => a + b * c - d;
	equal(uncurry4(f)(1, 2, 3, 4), 3);

	const g = (a) => (b) => (c) => (d, e) => a + b * c - d * e;
	equal(uncurry4(g)(1, 2, 3, 4, 5), -13);
});

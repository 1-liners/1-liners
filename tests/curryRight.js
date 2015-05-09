import {equal} from 'assert';
import curryRight from '../curryRight';

test('#curryRight', () => {
	const g = (a, b, c, d) => a + b * c - d;
	const gλ = curryRight(g);

	equal(
		gλ(4)(1, 2, 3),
		3
	);
	equal(
		gλ(3, 4)(1, 2),
		3
	);
	equal(
		gλ(2, 3, 4)(1),
		3
	);
});

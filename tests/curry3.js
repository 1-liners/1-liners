import { equal } from 'assert';
import curry3 from '../curry3';

test('#curry3', () => {
	const f = (a, b, c) => a + b * c;
	equal(
		curry3(f)(1)(2)(3),
		7
	);

	const g = (a, b, c, d) => a + b * c - d;
	equal(
		curry3(g)(1)(2)(3, 4),
		3
	);
	equal(
		curry3(g)(1)(2, 3)(4),
		3
	);
	equal(
		curry3(g)(1, 2)(3)(4),
		3
	);
});

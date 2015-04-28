import { equal } from 'assert';
import curry4 from '../curry4';

test('#curry4', () => {
	const f = (a, b, c, d) => a + b * c - d;
	equal(
		curry4(f)(1)(2)(3)(4),
		3
	);

	const g = (a, b, c, d, e) => a + b * c - d * e;
	equal(
		curry4(g)(1)(2)(3)(4, 5),
		-13
	);
	equal(
		curry4(g)(1)(2)(3, 4)(5),
		-13
	);
	equal(
		curry4(g)(1)(2, 3)(4)(5),
		-13
	);
	equal(
		curry4(g)(1, 2)(3)(4)(5),
		-13
	);
});

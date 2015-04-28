import { equal } from 'assert';
import curry2 from '../curry2';

test('#curry2', () => {
	const f = (a, b) => a + b;
	equal(curry2(f)(1)(2), 3);

	const g = (a, b, c) => a + b + c;
	equal(
		curry2(g)(1)(2, 3),
		6
	);
	equal(
		curry2(g)(1, 2)(3),
		6
	);
});

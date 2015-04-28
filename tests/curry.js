import { equal } from 'assert';
import curry from '../curry';

test('#curry', () => {
	const f = (a, b) => a + b;
	equal(curry(f)(1)(2), 3);

	const g = (a, b, c) => a + b + c;
	equal(
		curry(g)(1)(2, 3),
		6
	);
	equal(
		curry(g)(1, 2)(3),
		6
	);
});

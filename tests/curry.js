import { equal } from 'assert';
import curry from '../curry';
import reduce from '../reduce';
import compose from '../compose';

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

	const curry3 = compose(curry, curry);
	equal(
		curry3(g)(1)(2)(3),
		6
	);

	const h = (a, b, c, d) => a + b + c + d;
	const curry4 = reduce(compose, [curry, curry, curry]);
	equal(
		curry4(h)(1)(2)(3)(4),
		10
	);
});

import { equal } from 'assert';
import apply from '../apply';

test('#apply', () => {
	let f = (a) => a + a;
	let g = (a, b, c) => a * b * c;
	let h = (a, b) => a * b;

	equal(apply(f, [1]), f(1));
	equal(apply(g, [1, 2, 3]), g(1, 2, 3));
	equal(apply(h, [1, 2, 3]), h(1, 2, 3));
});

import { equal } from 'assert';
import implode from '../implode';

test('#implode', () => {
	let f = (a) => a + a;
	let g = (a, b, c) => a * b * c;
	let h = (a, b) => a * b;

	equal(implode(f)([1]), f(1));
	equal(implode(g)([1, 2, 3]), g(1, 2, 3));
	equal(implode(h)([1, 2, 3]), h(1, 2, 3));
});

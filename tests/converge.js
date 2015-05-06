import { equal } from 'assert';
import converge from '../converge';

test('#converge', () => {
	let g = (a, b) => a + b;
	let f = (a, b) => a * b;
	let h = (a, b) => a / b

	equal(converge(f, g, h)(1, 2), f(g(1, 2), h(1, 2)));
});

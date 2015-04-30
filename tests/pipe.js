import { equal } from 'assert';
import pipe from '../pipe';
import shave from '../shave';

test('#pipe', () => {
	let g = (a, b) => a + b;
	let f = (a) => a + a;
	let h = (a) => a * -1;

	equal(pipe(g, f)(1, 2), f(g(1, 2)));
	equal(pipe(g, f, h)(1, 2), h(f(g(1, 2))));
	equal([g, f, h].reduce(shave(2, pipe))(1, 2), h(f(g(1, 2))));
});

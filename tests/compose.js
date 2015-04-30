import { equal } from 'assert';
import compose from '../compose';
import shave from '../shave';

test('#compose', () => {
	let g = (a, b) => a + b;
	let f = (a) => a + a;
	let h = (a) => a * -1;

	equal(compose(f, g)(1, 2), f(g(1, 2)));
	equal(compose(h, f, g)(1, 2), h(f(g(1, 2))));
	equal([h, f, g].reduce(shave(2, compose))(1, 2), h(f(g(1, 2))));
});

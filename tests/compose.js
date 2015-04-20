import { equal } from 'assert';
import compose from '../compose';

test('#compose', () => {
	let g = (a, b) => a + b;
	let f = (a) => a + a;
	let h = (a) => a * -1;

	equal(compose(f, g)(1, 2), f(g(1, 2)));
	equal([h, f, g].reduce(compose)(1, 2), h(f(g(1, 2))));
});

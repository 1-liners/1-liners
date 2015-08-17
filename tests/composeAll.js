import { equal } from 'assert';
import composeAll from '../composeAll';

test('#composeAll', () => {
	let g = (a, b) => a + b;
	let f = (a) => a + a;
	let h = (a) => a * -1;

	equal(composeAll([f, g])(1, 2), f(g(1, 2)));
	equal(composeAll([h, f, g])(1, 2), h(f(g(1, 2))));
});

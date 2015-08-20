import { equal } from 'assert';
import pipeAll from '../pipeAll';

test('#pipeAll', () => {
	let g = (a, b) => a + b;
	let f = (a) => a + a;
	let h = (a) => a * -1;

	equal(pipeAll([g, f])(1, 2), f(g(1, 2)));
	equal(pipeAll([g, f, h])(1, 2), h(f(g(1, 2))));
});

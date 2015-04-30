import { equal } from 'assert';
import implode from '../implode';
import explode from '../explode';

test('#explode', () => {
	let f = implode((a) => a + a);
	let g = implode((a, b, c) => a * b * c);
	let h = implode((a, b) => a * b);

	equal(explode(f)(1), f([1]));
	equal(explode(g)(1, 2, 3), g([1, 2, 3]));
	equal(explode(h)(1, 2, 3), h([1, 2, 3]));
});

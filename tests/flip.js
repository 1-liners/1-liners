import { equal } from 'assert';
import flip from '../flip';

test('#flip', () => {
	const f = (a, b) => a / b;
	equal(flip(f)(2, 6), 3);
	equal(flip(flip(f))(6, 2), 3);
	
	const g = (a, b, c) => a / (b + c);
	equal(flip(g)(1, 2, 3), 1);
	equal(flip(flip(g))(3, 2, 1), 1);
});

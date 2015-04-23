import { equal } from 'assert';
import every from '../every';

test('#every', () => {
	equal(every(elem => elem >= 16,[1,2,7,9,11,42]), false);
    equal(every(elem => elem >= 16,[17,18,19,42]), true);
});

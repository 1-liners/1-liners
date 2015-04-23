import { equal } from 'assert';
import some from '../some';

test('#some', () => {
	equal(some(elem => elem >= 16,[1,2,7,9,11,42]), true);
    equal(some(elem => elem >= 16,[0,1,2]), false);
});

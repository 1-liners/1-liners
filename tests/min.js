import {equal} from 'assert';
import min from '../min';

test('#min', () => {
	equal(min(3, 6), 3);
	equal([3, 6, 1].reduce(min), 1);
});

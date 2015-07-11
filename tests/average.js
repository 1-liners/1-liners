import { equal, ok } from 'assert';
import average from '../average';

const {isNaN} = Number;

test('#average', () => {
	equal(average([2, 3, 4]), 3);
	equal(average([{valueOf: () => 10}]), 10);

	ok(isNaN(average([])));
});

import { equal } from 'assert';
import product from '../product';

test('#product', () => {
	equal(product([2, 3, 4]), 24);
	equal(product([]), 1);
	equal(product([{valueOf: () => 10}]), 10);
});

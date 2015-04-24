import { equal } from 'assert';
import dec from '../dec';

test('#dec', () => {
	equal(dec(5), 4);
	equal(dec(5,5), 0);
});

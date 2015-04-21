import {
	equal
}
from 'assert';
import xor from '../xor';

test('#xor', () => {
	equal(xor(1, 0), 1);
	equal(xor(1, 1), 0);
	equal(xor(0, 1), 1);
	equal(xor(0, 0), 0);
});

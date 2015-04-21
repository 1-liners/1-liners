import {
	equal
}
from 'assert';
import xor from '../src/xor';

test('#xor', () => {
	equal(xor(1, 0), 1);
	equal(xor(1, 1), 0);
});

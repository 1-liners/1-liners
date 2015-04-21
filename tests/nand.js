import {
	equal
}
from 'assert';
import nand from '../nand';

test('#nand', () =>
	equal(nand(0, 0), true); equal(nand(1, 1), false);
);

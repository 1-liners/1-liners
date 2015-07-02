import { equal, ok } from 'assert';
import signum from '../signum';

test('#signum', () => {
	equal(signum(-5),         -1);
	equal(signum(-Infinity),  -1);

	equal(signum(10),        1);
	equal(signum(Infinity),  1);

	equal(signum(0),   0);
	equal(signum(-0),  0);

	ok(Number.isNaN(signum(NaN)));
});

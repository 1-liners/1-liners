import {
	ok
}
from 'assert';
import noop from '../noop';

test('#noop', () =>
	ok(noop());
);

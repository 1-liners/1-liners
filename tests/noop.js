import {
	ok
}
from 'assert';
import noop from '../noop';

test('#noop', () => {
	ok(typeof noop === 'function');
	ok(noop() === undefined);
});

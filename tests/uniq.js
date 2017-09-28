import { deepEqual } from 'assert';
import uniq from '../uniq';

test('#uniq', () => {
	deepEqual(uniq([0, 5, 7, 5, 0]), [0, 5, 7]);
	deepEqual(uniq(['a', 'b', 'b']), ['a', 'b']);
});

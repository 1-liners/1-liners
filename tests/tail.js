import { deepEqual } from 'assert';
import tail from '../src/tail';

test('#tail', () => deepEqual(tail([0, 1, 2]), [1, 2]));

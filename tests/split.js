import { deepEqual } from 'assert';
import split from '../split';

test('#split', () => deepEqual(split('-', '1-liners'), [1, 'liners']));

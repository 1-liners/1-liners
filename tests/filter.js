import { deepEqual } from 'assert';
import filter from '../filter';

let isOdd = (x) => x % 2 !== 0;

test('#filter', () => deepEqual(filter(isOdd, [1, 2, 3, 4, 5]), [1, 3, 5]));

import { equal } from 'assert';
import reduceFromRight from '../reduceFromRight';

let sub = (x, y) => x - y;
test('#reduceFromRight', () => equal(reduceFromRight(sub, 10, [1, 2, 3, 4]), 0));

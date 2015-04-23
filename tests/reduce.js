import { equal } from 'assert';
import reduce from '../reduce';

let sub = (x, y) => x - y;
test('#reduce', () => equal(reduce(sub, [1, 2, 3, 4]), -8));

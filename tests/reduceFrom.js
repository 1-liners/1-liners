import { equal } from 'assert';
import reduceFrom from '../reduceFrom';

let sub = (x, y) => x - y;
test('#reduceFrom', () => equal(reduceFrom(sub, 8, [1, 2, 3, 4]), -2));

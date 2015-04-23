import { equal } from 'assert';
import curry4 from '../curry4';

let f = (a, b, c, d) => a + b + c + d;
test('#curry4', () => equal(curry4(f)(1)(2)(3)(4), 10));

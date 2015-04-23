import { equal } from 'assert';
import curry2 from '../curry2';

let f = (a, b) => a + b;
test('#curry2', () => equal(curry2(f)(1)(2), 3));

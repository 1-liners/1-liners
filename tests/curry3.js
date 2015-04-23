import { equal } from 'assert';
import curry3 from '../curry3';

let f = (a, b, c) => a + b + c;
test('#curry3', () => equal(curry3(f)(1)(2)(3), 6));

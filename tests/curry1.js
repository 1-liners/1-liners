import { equal } from 'assert';
import curry1 from '../curry1';

let f = (a) => a + 1;
test('#curry1', () => equal(curry1(f)(1), 2));

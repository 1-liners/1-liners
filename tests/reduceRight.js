import { equal } from 'assert';
import reduceRight from '../reduceRight';

let sub = (x, y) => x - y;
test('#reduceRight', () => equal(reduceRight(sub, [1, 2, 3, 4]), -2));

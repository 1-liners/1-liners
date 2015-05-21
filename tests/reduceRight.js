import { equal, deepEqual } from 'assert';
import reduceRight from '../reduceRight';

let sub = (x, y) => x - y;
test('#reduceRight', () => {
	let arr = [1, 2, 3, 4];
	equal(reduceRight(sub, arr), -2);
	deepEqual(arr, [1, 2, 3, 4]);
});

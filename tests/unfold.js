import { deepEqual } from 'assert';
import  unfold  from '../unfold';

const fn = n => n < 20 ?  [n, n + 1] : false;
test('#unfold', () => {
	deepEqual(unfold(fn, 10), [10,11,12,13,14,15,16,17,18,19]);
});

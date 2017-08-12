import { equal } from 'assert';
import once from '../once';

test('#once', () => {
	let count = 0;
	let func = once(() => ++count);
	equal(count, 0, 'lazy');
	let result1 = func();
	let result2 = func();
	equal(count, 1, 'count');
	equal(result1, 1, 'result1');
	equal(result2, 1);

	function self() {
		count = count + 100;
		return self;
	}
	let selfOnce = once(self);
	selfOnce();
	selfOnce();
	equal(count, 101, 'self count');
});

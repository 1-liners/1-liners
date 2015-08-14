import { equal } from 'assert';
import bind from '../bind';

test('#bind', () => {
	const Obj = {
		foo: 'foo',
		fun: function(a, b, c) {
			return this.foo + a + b + c;
		}
	};
	equal(bind(Obj, [1, 2, 3], Obj.fun)(), 'foo123');
});

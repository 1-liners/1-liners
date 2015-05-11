import { deepEqual } from 'assert';
import pick from '../pick';

test('#pick', () => {
	const object = {foo: 1, bar: 2, baz: 3};

	deepEqual(
		pick(['foo', 'baz'], object),
		{foo: 1, baz: 3}
	);
	deepEqual(
		pick([], object),
		{}
	);
	deepEqual(
		pick(['oof'], object),
		{oof: undefined}
	);
});

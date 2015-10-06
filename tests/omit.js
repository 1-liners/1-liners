import { deepEqual } from 'assert';
import omit from '../omit';

test('#omit', () => {
	const object = {foo: 1, bar: 2, baz: 3};

	deepEqual(
		omit(['foo', 'baz'], object),
		{bar: 2}
	);
	deepEqual(
		omit([], object),
		object
	);
	deepEqual(
		omit(['oof'], object),
		object
	);
	deepEqual(
		object,
		{foo: 1, bar: 2, baz: 3}
	);
});

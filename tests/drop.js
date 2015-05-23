import { deepEqual } from 'assert';
import drop from '../drop';

test('#drop', () => {
	const object = {foo: 1, bar: 2, baz: 3};

	deepEqual(
		drop(['foo', 'baz'], object),
		{bar: 2}
	);
	deepEqual(
		drop([], object),
		object
	);
	deepEqual(
		drop(['oof'], object),
		object
	);
	deepEqual(
		object,
		{foo: 1, bar: 2, baz: 3}
	);
});

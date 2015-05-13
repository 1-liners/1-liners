import { ok, equal, deepEqual } from 'assert';
import shallowClone from '../shallowClone';

test('#shallowClone', () => {
	const source = {
		value: 'value',
		reference: /reference/,
	};

	const target = shallowClone(source);

	ok(source !== target);
	deepEqual(source, target);
	equal(source.value, target.value);
	equal(source.reference, target.reference);
});

import { equal } from 'assert';
import property from '../property';

test('#property', () => {
	const object = {foo: 1, baz: [3]};

	equal(property('foo', object), 1);
	equal(property('bar', object), undefined);
	equal(property('baz', object), object.baz);
});

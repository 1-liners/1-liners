import { deepEqual, notDeepEqual } from 'assert';
import assign from '../assign';

test('#assign', () => {
	const object = {id: 1, age: 29};

	deepEqual(assign({name: 'Luke'}, object), { id: 1, name: 'Luke', age: 29 });
	deepEqual(assign({age: 100, name: 'Yoda' }, object), { id: 1, name: 'Yoda', age: 100 });
	notDeepEqual(assign({name: 'Luke'}, object), object);
});

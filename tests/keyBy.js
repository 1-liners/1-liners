import { deepEqual } from 'assert';
import keyBy from '../keyBy';

test('#keyBy', () => {
	const array = [{id: 1}, {id: 2}];
	deepEqual(keyBy(array, o => o.id), {1: {id: 1}, 2: {id: 2}});
});

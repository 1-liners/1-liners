import { deepEqual } from 'assert';
import uniqBy from '../uniqBy';

test('#uniqBy', () => {
	let array = [{ id: 1 }, { id: 2 }, { id: 1 }];
	deepEqual(uniqBy(array, o => o.id), [{ id: 1 }, { id: 2 }]);
	let array2 = [[1, 2], [1, 2]];
	deepEqual(uniqBy(array2, o => JSON.stringify(o)), [[1, 2]]);
});

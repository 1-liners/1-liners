import { deepEqual } from 'assert';
import pop from '../pop';

test('#pop', () => {
	const array = [1, 2, 3];

	deepEqual(pop(array)  , [1, 2]     );
	deepEqual(array       , [1, 2, 3]  );

	deepEqual(pop([])  , []  );
});

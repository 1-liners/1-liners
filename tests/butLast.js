import { deepEqual } from 'assert';
import butLast from '../butLast';

test('#butLast', () => {
	const array = [1, 2, 3];

	deepEqual(butLast(array)  , [1, 2]     );
	deepEqual(array       , [1, 2, 3]  );

	deepEqual(butLast([])  , []  );
});

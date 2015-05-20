import { deepEqual } from 'assert';
import shift from '../shift';

test('#shift', () => {
	const array = [1, 2, 3];

	deepEqual(shift(array)  , [2, 3]     );
	deepEqual(array         , [1, 2, 3]  );

	deepEqual(shift([])  , []  );
});

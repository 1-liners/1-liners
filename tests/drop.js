import { deepEqual } from 'assert';
import drop from '../drop';

test('#drop', () => {
	const array = [1, 2, 3, 4, 5];
	const string = 'Hello World';

	deepEqual(drop(2, array), [3, 4, 5]);
	deepEqual(drop(array.length + 1, array), []);
    deepEqual(drop(6, string), 'World');
});

import { deepEqual, notDeepEqual } from 'assert';
import extend from '../extend';

test('#extend', () => {
	const object = {id: 1};

	deepEqual(extend({name: 'stoeffel'}, object), { id: 1, name: 'stoeffel' });
	notDeepEqual(extend({name: 'stoeffel'}, object), object);
});

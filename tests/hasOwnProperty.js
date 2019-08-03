import {
	equal
} from 'assert';
import hasOwnProperty from '../hasOwnProperty';

test('#hasOwnProperty', () => {
	let object = {
		a: 1,
		b: 2,
		hasOwnProperty: () => 42
	};
	equal(hasOwnProperty('a', object), true);
	equal(hasOwnProperty('c', object), false);
});

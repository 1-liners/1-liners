import { equal, deepEqual } from 'assert';
import ifThen from '../ifThen';

test('#ifThen', () => {
	let words = ifThen((str) => typeof str === 'string', (str) => str.split(' '));

	deepEqual(words('Hello ES2015'), ['Hello', 'ES2015']);
	equal(words(1), undefined);
});

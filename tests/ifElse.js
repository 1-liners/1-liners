import { equal, deepEqual } from 'assert';
import ifElse from '../ifElse';

test('#ifElse', () => {
	let eq = (a, b) => a === b;
	let add = (a, b) => a + b;
	let sub = (a, b) => a - b;

	equal(ifElse(eq, add, sub)(1, 1), 2);
	equal(ifElse(eq, add, sub)(2, 1), 1);
	equal(ifElse(eq, add)(2, 1), undefined);

	let words = ifElse((str) => typeof str === 'string', (str) => str.split(' '));

	deepEqual(words('Hello ES2015'), ['Hello', 'ES2015']);
	equal(words(1), undefined);
});

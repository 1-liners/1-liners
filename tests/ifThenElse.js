import { equal, deepEqual } from 'assert';
import ifThenElse from '../ifThenElse';

test('#ifThenElse', () => {
	let eq = (a, b) => a === b;
	let add = (a, b) => a + b;
	let sub = (a, b) => a - b;

	equal(ifThenElse(eq, add, sub)(1, 1), 2);
	equal(ifThenElse(eq, add, sub)(2, 1), 1);
});

import { equal } from 'assert';
import get from '../get';

test('#get', () => {
	let obj = { a: { b: 1, c: null } };
	equal(get('a.b', obj), 1);
	equal(get('a.c', obj), null);
	equal(get('0.a', [{ a: 42 }]), 42);
});

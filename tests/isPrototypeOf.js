import { equal } from 'assert';
import isPrototypeOf from '../isPrototypeOf';

test('#isPrototypeOf', () => {
	const Foo = function() {};
	const Bar = function() {};

	Bar.prototype = new Foo();

	let bar = new Bar();
	let foo = new Foo();

	equal(isPrototypeOf(Foo, bar), true);
	equal(isPrototypeOf(Bar, foo), false);
});

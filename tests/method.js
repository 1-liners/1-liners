import { equal } from 'assert';
import method from '../method';

test('#method', () => {
	const object = {
		base: 1,
		add(number) { return this.base + number; },
	};

	equal(
		method('add', object)(5),
		6
	);
});

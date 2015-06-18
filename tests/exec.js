import { equal } from 'assert';
import exec from '../exec';

const stringify = require('../curry')(require('../join'))('\0');

test('#test', () => {
	const haystack = 'hAyHAYhayneEdLEHayHAy';

	equal(
		stringify(exec(haystack, /needle/i)),
		stringify(['neEdLE'])
	);

	equal(
		stringify(exec(haystack, /n(.+)e/i)),
		stringify(['neEdLE', 'eEdL'])
	);

	equal(
		exec(haystack, /needle/),
		null
	);
});

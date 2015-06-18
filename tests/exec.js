import { deepEqual } from 'assert';
import exec from '../exec';

test('#test', () => {
	const haystack = 'hAyHAYhayneEdLEHayHAy';

  deepEqual(
  	exec(haystack, /needle/i),
  	['neEdLE']
  );

  deepEqual(
  	exec(haystack, /n(.+)e/i),
  	['neEdLE', 'eEdL']
  );

  deepEqual(
  	exec(haystack, /needle/),
  	null
  );
});

import { deepEqual } from 'assert';
import match from '../match';

test('#match', () => deepEqual(match(/\d+/g, '1.2.3.4.5'), ["1","2","3","4","5"]));

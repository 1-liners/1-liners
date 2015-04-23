import { deepEqual } from 'assert';
import map from '../map';

test('#map', () => deepEqual(map(Math.sqrt, [9, 16, 25]), [3, 4, 5]));

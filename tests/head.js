import { equal } from 'assert';
import head from '../src/head';

test('#head', () => equal(head([0, 1, 2]), 0));

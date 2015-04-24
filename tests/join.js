import { equal } from 'assert';
import join from '../join';

test('#join', () => equal(join('-', [1, 'liners']), '1-liners'));

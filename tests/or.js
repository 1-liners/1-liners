import {
  equal
}
from 'assert';
import or from '../src/or';

test('#or', () => equal(or(1, 2), 3));

import {
  equal
}
from 'assert';
import and from '../src/and';

test('#and', () => equal(and(1, 2), 0));

import {
  equal
}
from 'assert';
import bitOr from '../bitOr';

test('#bitOr', () => {
  equal(bitOr(1, 0), 1);
  equal(bitOr(1, 1), 1);
});

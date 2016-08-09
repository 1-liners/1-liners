import { equal, throws } from 'assert';
import normalize from '../normalize';

test('#normalize', () => {
  let str = '\u1E9B\u0323';
  throws(() => {
    normalize(null, str), RangeError, 'The normalization form should be one of NFC, NFD, NFKC, NFKD.'
  })
  equal(normalize('NFC', str), 'ẛ̣');
  equal(normalize('NFD', str), 'ẛ̣');
  equal(normalize('NFKC', str), 'ṩ');
  equal(normalize('NFKD', str), 'ṩ');
});

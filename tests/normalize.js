import { equal } from 'assert';
import normalize from '../normalize';

test('#normalize', () => {
  let str = '\u1E9B\u0323';
  equal(normalize(null, str), 'ẛ̣');
  equal(normalize('NFC', str), 'ẛ̣');
  equal(normalize('NFD', str), 'ẛ̣');
  equal(normalize('NFKC', str), 'ṩ');
  equal(normalize('NFKD', str), 'ṩ');
});

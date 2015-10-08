import { equal } from 'assert';
import charCodeAt from '../charCodeAt';

test('#charCodeAt', () => {
  equal(charCodeAt(1, 'hallo'), 97);
  equal(charCodeAt(3, 'große'), 223);
});

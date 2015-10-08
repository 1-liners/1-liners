import { equal } from 'assert';
import codePointAt from '../codePointAt';

test('#codePointAt', () => {
  equal(codePointAt(1, 'ᴅᴇᴄᴇᴘᴛɪᴠᴇ ᴜɴɪᴄᴏᴅᴇ'), 7431);
  equal(codePointAt(0, '😀'), 128512);
});

import { deepEqual } from 'assert';
import compactObject from '../compactObject';

test('#compactObject', () => {
  deepEqual(compactObject({
        name: 'adwvfd',
        value: 'ebvk',
        fgs: undefined,
        caws: 1324,
        test: null,
        testde: 4355
    }), {
        caws: 1324,
        name: "adwvfd",
        testde: 4355,
        value: "ebvk"
    });
  deepEqual(compactObject({}), {});
  deepEqual(compactObject({
      a: false,
      b: undefined,
      c: null
  }), {});
});

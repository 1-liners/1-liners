import { equal } from 'assert';
import propertyIsEnumerable from '../propertyIsEnumerable';

test('#propertyIsEnumerable', () => {
  equal(propertyIsEnumerable({}, 'length'), false)
  equal(propertyIsEnumerable({'bar': 'bar'}, 'bar'), true)
});

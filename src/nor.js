import or from './or';
import not from './not';

export default (x, y) => not(or(x, y));

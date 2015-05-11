import { equal } from 'assert';
import replace from '../replace';

test('#replace', () => {
	equal(replace(/\d+/g, sub => `"${sub}"`, 'Items: 3,2'), `Items: "3","2"`);
	equal(replace(':', '=', 'Items: 3,2'), 'Items= 3,2');
});

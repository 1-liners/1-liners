import { equal } from 'assert';
import replace from '../replace';

test('#replace', () => {
	equal(replace(/\d+/g, sub => `"${sub}"`, 'Items: 3,2'), `Items: "3","2"`);
	let str = 'Items: 3,2';
	equal(replace(':', '=', str), 'Items= 3,2');
	equal(str, 'Items: 3,2');
});

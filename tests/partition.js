import { deepEqual } from 'assert';
import partition from '../partition';

test('#partition', () => {
	const [even, odd] = partition([1, 2, 3, 4], n => n % 2 === 0);
	deepEqual(even, [2, 4]);
	deepEqual(odd, [1, 3]);
	const [adults, kids] = partition([
		{ name: 'Luis', age: 19 },
		{ name: 'Monty', age: 13 },
		{ name: 'Rex', age: 39 },
		{ name: 'Barry', age: 15 },
	], o => o.age >= 18);
	deepEqual(adults.map(p => p.name), ['Luis', 'Rex']);
	deepEqual(kids.map(p => p.name), ['Monty', 'Barry']);
});

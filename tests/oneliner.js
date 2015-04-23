import { equal } from 'assert';
import { join } from 'path';
import { readdir, readFile } from 'fs';

test('Should be a oneliner', (done) =>
	readdir(join(__dirname, '..', 'src'), (err, files) => {
		if (err) throw err;
		let countTests = 0;

		files.forEach((file) => {
			readFile(join(__dirname, '..', 'src', file), { encoding: 'utf8', flag: 'r' }, (err, data) => {
				if (err) throw err;
				let count = 0;
				let lines = data.split(/\n/).forEach((l) => {
					if (l.length > 0) count++;
				});

				equal(count, 1, `${file} should be a oneliner`);

				countTests++;
				if (countTests >= files.length) done();
			})
		});
	})
);

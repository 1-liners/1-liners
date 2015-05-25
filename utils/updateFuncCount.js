import getModules from './getModules';
import { readFile, writeFile } from 'fs';
import { join } from 'path';
import curry from '../module/curry';
import replace from '../module/replace';

const replaceCount = curry(replace)(/\d+ one-liner functions/);

getModules((err, modules) => {
	if (err) throw err;
	readFile(join(__dirname, '..', 'README.md'), { encoding: 'utf8' }, (err, data) => 
			err? onError(err):
			writeFile('./README.md', replaceCount(modules.length + ' one-liner functions', data), onFileWritten));
})

function onError(err) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
}

function onFileWritten(err) {
	if (err) onError(err);
	console.log('updted func count');
	process.exit(0);
}

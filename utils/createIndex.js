import getModules from 'get-modules';
import { writeFile } from 'fs';
import path from 'path';
import curry from '../module/curry';
import map from '../module/map';
import join from '../module/join';
import compose from '../module/compose';
import reduce from '../module/reduce';
import filter from '../module/filter';

const mapλ = curry(map);
const joinλ = curry(join);
const filterλ = curry(filter);

const removeExt = mapλ(module => module.replace('.js', ''));
const filterIndex = filterλ(module => module !== 'index.js');

const createImports = reduce(compose, [
	joinλ('\n'),
	mapλ(module => `import ${module} from './${module}';`),
	removeExt,
	filterIndex
]);

const createExport = reduce(compose, [
	joinλ(',\n  '),
	removeExt,
	filterIndex
]);

getModules(path.join(__dirname, '..'), (err, modules) => {
	if (err) throw err;
	let imports = createImports(modules);
	let exportDefault = `export {\n  ${createExport(modules)}\n};`;
	writeFile('./module/index.js', `${imports}\n\n${exportDefault}`, function(err) {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		console.log('created index');
		process.exit(0);
	});
})

import { parseComments } from 'dox';
import getModules from './getModules';
import { readFileSync, writeFile } from 'fs';
import curry from '../module/curry';
import map from '../module/map';
import join from '../module/join';
import head from '../module/head';
import nth from '../module/nth';
import property from '../module/property';
import compose from '../module/compose';
import reduce from '../module/reduce';
import filter from '../module/filter';

const composeAll = (...funcs) => reduce(compose, funcs);
const mapλ = curry(map);
const filterλ = curry(filter);
const joinλ = curry(join);

const filterIndex = filterλ(module => module !== 'index.js');

getModules((err, modules) => {
	if (err) throw err;

	const docs = composeAll(
		joinλ('\n'),
		mapλ(renderTpl),
		mapλ(parseComments),
		mapλ(fileName => readFileSync(fileName, { encoding: 'utf8' })),
		mapλ(fileName => `./module/${fileName}`),
	  filterIndex
	)(modules);

	const README = `&nbsp;<p align="center"><img src="https://cdn.rawgit.com/stoeffel/1-liners/66775c8/logo.png" width="382px" height="125px" /></p>&nbsp;
# Documentation

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

${docs}
	`;
	writeFile('./documentation/README.md', README, onFileWritten);
})


function onFileWritten(err) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log('created docs');
	process.exit(0);
}

function renderTpl(comments) {
	const comment = head(comments);
	const tags = property('tags', comment);
	const code = property('code', comment)
		.replace(/export default/g, '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
	;
	if (tags.length <= 0) {
		console.warn(`NO DOCS FOR ${code} !!!`);
		return `\n\n:zap: NO DOCS FOR ${code} !!!\n\n`;
	}
	const name = property('string', head(tags)).replace('1-liners/', '');
	const desc = property('full', nth(1, tags));
	const example = property('string', nth(2, tags)).replace(/\n\t/g, '\n');

	const block = `
### ${name}

${desc}

\`\`\`js${example}
\`\`\`

<div align="right"><sup>
	<a href="../tests/${name}.js">Spec</a>
	•
	<a href="../module/${name}.js">Source</a>: <code>${code}</code>
</sup></div>
`;

	return block;
}

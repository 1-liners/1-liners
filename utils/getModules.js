import { join } from 'path';
import { readdir } from 'fs';

export default (cb) => readdir(join(__dirname, '..', 'module'), (err, files) => cb(err, files));

/**
 * @module 1-liners/set
 *
 * @description
 *
 * X
 *
 * @example
 *
 * 	const set = require('1-liners/set');
 *
 *  let obj = {};
 *  set(obj, 'a.b.c', 42); // => 42
 *
 */
export default (obj, path, value) => {
	return ((path) => {
		return ((path, [name]) => {
			var x = path.reduce((result, prop) => {
				result[prop] = result[prop] || {};
				return result[prop];
			}, obj);
			x[name] = value;
			return obj;
		})(path.slice(0, -1), path.slice(-1));
	})(path.split('.'));
};

// export default (obj, path, value) => ((path) => ((path, [name]) => ((path.reduce((result, prop) => (result[prop] = result[prop] || {}, result[prop]), obj))[name] = value, obj))(path.slice(0, -1), path.slice(-1)))(path.split('.'));

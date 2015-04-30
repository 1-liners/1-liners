export default (method, object) => (...args) => object[method](...args);

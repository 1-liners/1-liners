export default (f, g) => (...args) => g(f(...args));

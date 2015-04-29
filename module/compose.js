export default (f, g) => (...args) => f(g(...args));

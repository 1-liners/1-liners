export default (f, g, h) => (...args) => f(g(...args), h(...args));

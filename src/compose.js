export default (f, g) => (...args) => f(g.apply(this, args));

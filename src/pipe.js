export default (f, g) => (...args) => g(f.apply(this, args));

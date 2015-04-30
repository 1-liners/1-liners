export default (f) => (a, ...rest) => f(a)(...rest);

export default (f) => (a, b, ...rest) => f(a)(b)(...rest);

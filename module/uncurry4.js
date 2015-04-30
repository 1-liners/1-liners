export default (f) => (a, b, c, ...rest) => f(a)(b)(c)(...rest);

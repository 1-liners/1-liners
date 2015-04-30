export default (...funcs) => funcs.reduce((f, g) => (...args) => f(g(...args)));

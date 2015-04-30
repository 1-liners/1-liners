export default (...funcs) => funcs.reduce((f, g) => (...args) => g(f(...args)));

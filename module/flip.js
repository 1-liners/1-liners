export default (f) => (...args) => f(...args.reverse());

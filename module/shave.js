export default (shave, f) => (...args) => f(...(args.slice(0, shave)));

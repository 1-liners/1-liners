export default (f) => (...a) => (...b) => f(...b, ...a);

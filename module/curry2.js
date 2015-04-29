export default (f) => (...a) => (...b) => f(...a, ...b);

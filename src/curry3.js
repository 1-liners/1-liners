export default (f) => (...a) => (...b) => (...c) => f(...a, ...b, ...c);

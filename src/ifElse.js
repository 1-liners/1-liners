export default (pred, ifDo, elseDo=()=>{}) => (...args) => pred(...args) ? ifDo(...args) : elseDo(...args);

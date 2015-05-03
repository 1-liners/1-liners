export default (pred, arr) => arr.reduce((newArr, i) => { if (pred(i)) arr.length = 0; else newArr.push(i); return newArr; }, []);

const util = require('util');
const BST = require('./bst')
let bst = new BST();

let arr = [...Array(100).keys()]
arr.sort(() => .5 - Math.random())

let values = arr.slice(1,10).sort( (a,b) => a-b );

values = [9,4,17,3,6,22,5,7,20];

console.log(values);
values.map( (val, i) => {
    return bst.insert(val);
})

// console.log(values);
// console.log("Min", bst.min());
// console.log("Max", bst.max());
// bst.DFS(bst.root,1);
console.log(util.inspect(bst, {depth:null}));
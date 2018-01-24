const util = require('util');
const BST = require('./bst')
let bst = new BST();

let arr = [...Array(10).keys()]
arr.sort(() => .5 - Math.random())

console.log(arr);

arr.map( (val, i) => {
    return bst.insert(val);
})

// bst.prettyPrint();
console.log(util.inspect(bst, {depth:null}));
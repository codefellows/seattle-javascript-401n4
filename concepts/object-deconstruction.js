
let obj = {foo:"bar", biz:"buzz"};
let {biz} = obj;
let foo;
console.log(biz);
console.log(obj);


///////

biz="johnny";
foo="cathy";

obj = {foo, biz};

console.log(obj);

biz = "school";

let newThing = Object.assign(obj, {biz})
console.log(newThing);



const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...noA } = myObject;
console.log('noA', noA); // => { b: 2, c: 3 }

const {a:aa, ...newObject} = myObject;
console.log('a', a);
console.log('aa', aa);
console.log('newObject', newObject);

let deleteMe = "a";
const {[deleteMe]:deleted, ...anotherNewObject} = myObject;
console.log('a', a);
console.log('deleted', deleted);
console.log('anotherNewObject', anotherNewObject);


'use strict';

console.log('first');

let delay = () => Math.floor((Math.random() * 40))

setTimeout(() => console.log('second'), delay());
setTimeout(() => {
  console.log('third')
  setTimeout(() => {
    console.log('fourth') 
    setTimeout(() => {
      console.log('fig');
    }, delay())
  }, delay())
}, delay());

console.log('fifth');

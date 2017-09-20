'use strict';

//module.exports = (name) => {
  //if(typeof name === 'string')
    //return `Hello, ${name}`;
  //return null;
//};

module.exports = (name) => 
  typeof name === 'string' ? `Hello, ${name}` : null;


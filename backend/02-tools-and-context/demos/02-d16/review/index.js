'use strict';
// TODO: make a cli that takes a single arg and then logs greet( theArg)

const greet = require('./lib/greet.js');

const main =  module.exports = () => {
  let result = greet(process.argv[2]);
  console.log(result);
  return result;
};

main();

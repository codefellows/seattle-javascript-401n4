'use strict';

let index = require('../index.js');
let expect = require('expect');

let oldArgv;

describe('CLI', () => {

  after(() => {
    process.argv = oldArgv;
  });

  before(() => {
    oldArgv = process.argv
    process.argv = ['node', 'index.js', 'yo', 'sup', 'hey']
  });

  it('should return YO SUP HEY', () => {
    expect(index()).toEqual('YO SUP HEY');
  });
});

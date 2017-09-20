'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet', () => {
  it('it should return Hello, world!', () => {
    expect(greet('world!')).toEqual('Hello, world!');
  });

  it('it should return null', () => {
    expect(greet()).toBe(null);
    expect(greet([])).toBe(null);
    expect(greet(17)).toBe(null);
    expect(greet({})).toBe(null);
  });
});

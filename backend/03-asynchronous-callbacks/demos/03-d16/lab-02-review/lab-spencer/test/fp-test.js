'use strict';

let fp = require('../lib/fp.js');
let expect = require('expect');

describe('map', () => {
  it('should return [2,4,6,8]', () => {
    expect(fp.map([1,2,3,4], n => n * 2)).toEqual([2,4,6,8]);
  });
  it('should throw Error: invalid input', () => {
    expect(() => fp.map(2, n => n * 2)).toThrow(Error, 'invalid input'); // need a reference instead of actual call as result here
  });
});

describe('filter', () => {
  it('should return [1,3]', () => {
    expect(fp.filter([1,2,3,4], n => n % 2 === 1)).toEqual([1,3]);
  });
  it('should throw an error', () => {
    expect(() => fp.filter(2, n => n * 2)).toThrow(Error, 'invalid input');
  });
});

describe('reduce', () => {
  it('should return 10', () => {
    expect(fp.reduce([1,2,3,4], (a,c) => a + c, 10)).toEqual(20);
  });
  it('should throw an error', () => {
    expect(() => fp.reduce(2, (a,c) => a + c, 2)).toThrow(Error, 'invalid input');
  });
});

describe('concat', () => {
  it('should return [1,2,3,4,\'a\',\'b\',[2,4],0,1]', () => {
    expect(fp.concat([1,2,3,4], ['a','b',[2, 4]], [0,1])).toEqual([1,2,3,4,'a','b',[2,4],0,1]);
  });
  it('should throw an error', () => {
    expect(() => fp.concat(2, (a,c) => a + c)).toThrow(Error, 'invalid input');
  });
});

describe('splice', () => {
  it('should return [3]', () => {
    expect(fp.splice([1,2,3,4], 2, 1)).toEqual([3]);
  });
  it('should return [2,3]', () => {
    expect(fp.splice([1,2,3,4], 1, 2)).toEqual([2,3]);
  });
  it('should return []', () => {
    expect(fp.splice([1,2,3,4], 2, 0, 'sup', 'yo')).toEqual([]); // this would add sup and yo to the original array, so nothing pops out, so itll return []
  });
  it('should throw an error', () => {
    expect(() => fp.splice(2, (a,c) => a + c)).toThrow(Error, 'invalid input');
  });
});

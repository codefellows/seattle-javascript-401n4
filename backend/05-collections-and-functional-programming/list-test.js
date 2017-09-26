'use strict'

const List = require('../list');
const expect = require('expect');

describe('testing list', function(){
  it('new List() should create a list of length 0', () => {
    let list = new List();
    expect(list.length).toEqual(0);
    expect(list).toBeA(List);
  });

  it('new List() should create a list of length 10', () => {
    let list = new List(10)
    expect(list.length).toEqual(10);
    expect(list).toBeA(List);
  });

  it('list.append(value) should append value and update length', () => {
    let list = new List()
    list.append('one')
    expect(list.length).toEqual(1)
    expect(list[0]).toEqual('one')

    list.append('two')
    expect(list.length).toEqual(2)
    expect(list[0]).toEqual('one')
    expect(list[1]).toEqual('two')
    expect(list).toBeA(List);
  });

  it('list.prepend(value) should prepend value and update length', () => {
    let list = new List()
    list.prepend('one');
    expect(list.length).toEqual(1);
    expect(list[0]).toEqual('one');

    list.prepend('two');
    expect(list.length).toEqual(2);
    expect(list[0]).toEqual('two');
    expect(list[1]).toEqual('one');
    expect(list).toBeA(List);
  });

  it('list.reduce(sumCallback) shoudl sum values in list', () => {
    let list = new List();
    list.append(2).append(3).append(5)
    let result = list.reduce((p, n) => p + n, 0);
    expect(result).toEqual(10)
  });

  it('list.map(doubleCallback) should return a list with doubled values', () => {
    let list = new List();
    list.append(2).append(3).append(5);
    let result = list.map((n) => n * 2);
    expect(result[0]).toEqual(4);
    expect(result[1]).toEqual(6);
    expect(result[2]).toEqual(10);
    expect(result.length).toEqual(3);
    expect(result).toBeA(List);
  })

  it('new List(4).map(() => 0) should create 4 length list full of 0\'s', () => {
    let result = new List(4).map(() => 0)
    expect(result[0]).toEqual(0);
    expect(result[1]).toEqual(0);
    expect(result[2]).toEqual(0);
    expect(result[3]).toEqual(0);
    expect(result.length).toEqual(4);
    expect(result).toBeA(List);
  })

  it('list.filter(isEvenCallback) should return a list with even values', () => {
    let list = new List();
    list.append(1).append(2).append(3).append(4);
    let result = list.filter((n) => n % 2 == 0);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(4);
    expect(result.length).toEqual(2);
    expect(result).toBeA(List);
  });

  it('list.each(addIndexMutateCallback) should double each item in the list', () => {
    let list = new List().append(1).append(2).append(3).append(4);
    list.each((value, i, all) => all[i] = value + i)
    expect(list[0]).toEqual(1);
    expect(list[1]).toEqual(3);
    expect(list[2]).toEqual(5);
    expect(list[3]).toEqual(7);
    expect(list).toBeA(List);
  })
})

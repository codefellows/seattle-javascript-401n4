'use strict'

const expect = require('expect');
const mergeSort = require('../merge-sort');

describe('testing mergeSort', () => {
  it('mergeSort(array, isGreater) should sort from largest to smallest', () => {
    let isGreater = (a, b) => a > b;
    let nums = [3,1440,15,12,230]
    expect(mergeSort(nums, isGreater)).toEqual([1440,230,15,12,3])
  })

  it('mergeSort(array, isSmaller) should sort from smallest to largest', () => {
    let isSmaller = (a, b) => a < b;
    let nums = [3,1440,15,12,230]
    expect(mergeSort(nums, isSmaller)).toEqual([3,12,15,230,1440])
  })

  it('shoulr sort by name alphabeticaly', () => {
    let products = [
      {
        name: 'gummy Butter',
        price: 11.01,
      },
      {
        name: 'CORN hatS',
        price: 71.01,
      },
      {
        name: 'Yellow hotdogs',
        price: 2.01,
      },
      {
        name: 'dark miLK',
        price: 89.01,
      },
    ];

    let alphabetical = (a, b) => a.name.toLowerCase() < b.name.toLowerCase();
    let result = mergeSort(products, alphabetical);
    expect(result[0].name).toEqual('CORN hatS');
    expect(result[1].name).toEqual('dark miLK');
    expect(result[2].name).toEqual('gummy Butter');
    expect(result[3].name).toEqual('Yellow hotdogs');
  })
})



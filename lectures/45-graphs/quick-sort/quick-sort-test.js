'use strict'

const expect = require('expect');
const quicksort = require('../quick-sort');

describe.only('testing quicksort', () => {
  it('quicksort(list, isGreater) should sort from largest to smallest', ()=> {
    let nums = [4,9,2,3,1,10];

    let isGreater = (a, b) => a > b;
    expect(quicksort(nums, isGreater)).toEqual([10,9,4,3,2,1])
  })

  it('quicksort(list, isSmaller) should sort from smallest to largest', ()=> {
    let nums = [4,9,2,3,1,10];

    let isSmaller = (a,b) => a < b;
    expect(quicksort(nums, isSmaller)).toEqual([1,2,3,4,9,10])
  })

  let nums = [23,3,5,1,55,38,49,200,432,1, 352];

  let greater = (a, b) => a > b;
  let less = (a,b) => a < b;

  console.log(quicksort(nums));
  console.log(quicksort(nums, greater));
  console.log(quicksort(nums, less));

  let people = [
    {
      name: 'lark',
      age: 12,
    },
    {
      name: 'clark',
      age: 32,
    },
    {
      name: 'mark',
      age: 7,
    },
    {
      name: 'shark',
      age: 11,
    },
    {
      name: 'lark',
      age: 19,
    },
  ];

  let greaterAge = (a, b) => a.age > b.age;

  console.log(quicksort(people, greaterAge));
});


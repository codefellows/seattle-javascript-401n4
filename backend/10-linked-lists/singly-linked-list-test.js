'use strict'

const expect = require('expect');
const SLL = require('../singly-linked-list');

describe('testing singlyLinkedList', function(){
  it('new SLL should create a node', () => {
    let node = new SLL(4);
    expect(node.value).toEqual(4);
    expect(node.next).toEqual(null);

    let head = new SLL(3, node);
    expect(head.value).toEqual(3);
    expect(head.next).toEqual(node);
  });

  it('SLL.fromArray should return a linked list', () => {
    let head = SLL.fromArray([1,2,3,4])
    expect(head.value).toEqual(1)
    expect(head.next.value).toEqual(2)
    expect(head.next.next.value).toEqual(3)
    expect(head.next.next.next.value).toEqual(4)
  })

  it('SLL.append(list, node, should append node to list', () => {
    let head = new SLL(0);
    SLL.append(head, new SLL(3));
    SLL.append(head, new SLL(4));
    expect(head.value).toEqual(0);
    expect(head.next.value).toEqual(3);
    expect(head.next.next.value).toEqual(4);
  });

  it('node.append(value), should append node to list', () => {
    let head = new SLL(0)
    head.append(new SLL(4)).append(new SLL(5))
    expect(head.value).toEqual(0)
    expect(head.next.value).toEqual(4)
    expect(head.next.next.value).toEqual(5)
  });

  it('SLL.prepend(list, node) should return a list with node as head', () => {
    let list = SLL.fromArray([0, 4, 5])
    let head = new SLL(-1);
    let result = SLL.prepend(list, head);
    expect(result.value).toEqual(-1);
    expect(result.next).toEqual(list);
    expect(result).toEqual(head);
  })

  it('list.prepend(node) should return a list with node as head', () => {
    let list = SLL.fromArray([0, 4, 5])
    let head = new SLL(-1);
    let result = list.prepend(head);
    expect(result.value).toEqual(-1);
    expect(result.next).toEqual(list);
    expect(result).toEqual(head);
  })

  it('SLL.remove(list, node) should remove a list with node as head', () => {
    let removeMe = new SLL('delete')
    let head = new SLL('head')

    SLL.append(head, removeMe)
    SLL.append(head, new SLL('first'))
    expect(head.value).toEqual('head')
    expect(head.next).toEqual(removeMe)

    SLL.remove(head, removeMe)
    expect(head.value).toEqual('head')
    expect(head.next.value).toEqual('first')
  });

  it('list.remove(node) should remove a list with node as head', () => {
    let removeMe = new SLL('delete');
    let head = new SLL('head');

    head.append(removeMe).append(new SLL('first'));
    expect(head.value).toEqual('head');
    expect(head.next).toEqual(removeMe);

    head.remove(removeMe);
    expect(head.value).toEqual('head');
    expect(head.next.value).toEqual('first');
  });

  it('SLL.reverse(list) should reverse the list', () => {
    let list = SLL.fromArray([4, 5, 6]);
    let result = SLL.reverse(list);
    expect(result.value).toEqual(6);
    expect(result.next.value).toEqual(5);
    expect(result.next.next.value).toEqual(4);
  });

  it('list.reverse() should reverse the list', () => {
    let list = SLL.fromArray([4, 5, 6]);
    let result = list.reverse();
    expect(result.value).toEqual(6);
    expect(result.next.value).toEqual(5);
    expect(result.next.next.value).toEqual(4);
  });

  it('SLL.getMiddle(list) should return middle node', () => {
    let list = SLL.fromArray([4, 5, 6]);
    let middle = SLL.getMiddle(list);
    expect(middle.value).toEqual(5);

    list = SLL.fromArray([3, 4, 5, 6]);
    middle = SLL.getMiddle(list);
    expect(middle.value).toEqual(5);
  });

  it('list.getMiddle() should return middle node', () => {
    let list = SLL.fromArray([4, 5, 6]);
    let middle = list.getMiddle();
    expect(middle.value).toEqual(5);

    list = SLL.fromArray([3, 4, 5, 6]);
    middle = list.getMiddle();
    expect(middle.value).toEqual(5);
  });

  it('list.getLast() should return last node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = list.getLast();
    expect(result.value).toEqual(6);
  });

  it('SLL.getLast(list) should return last  node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = SLL.getLast(list);
    expect(result.value).toEqual(6);
  });

  it('SLL.getSecondFromLast(list) should return second to last node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = SLL.getSecondFromLast(list);
    expect(result.value).toEqual(5);
  });

  it('list.getSecondFromLast() should return second to last node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = list.getSecondFromLast();
    expect(result.value).toEqual(5);
  });

  it('SLL.getThirdFromLast(list) should return third from lastnode', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = SLL.getThirdFromLast(list);
    expect(result.value).toEqual(4);
  });

  it('list.getThirdFromLast() should return third from last node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = list.getThirdFromLast();
    expect(result.value).toEqual(4);
  });

  it('list.getNthFromLast() should return nth from last node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = list.getNthFromLast(0);
    expect(result.value).toEqual(6);

    result = list.getNthFromLast(1);
    expect(result.value).toEqual(5);

    result = list.getNthFromLast(2)
    expect(result.value).toEqual(4);

    result = list.getNthFromLast(3)
    expect(result.value).toEqual(3);
  });

  it('SLL.getNthFromLast(list, n) should return nth from last node', () => {
    let list = SLL.fromArray([3, 4, 5, 6]);
    let result = SLL.getNthFromLast(list, 0)
    expect(result.value).toEqual(6);

    result = SLL.getNthFromLast(list, 1);
    expect(result.value).toEqual(5);

    result = SLL.getNthFromLast(list, 2);
    expect(result.value).toEqual(4);

    result = SLL.getNthFromLast(list, 3);
    expect(result.value).toEqual(3);
  });

  it('list.reduce(cb) should reduce list', () => {
    let list = SLL.fromArray([1,2,3]);
    let result = list.reduce((p, n) => p + n.value, 0);
    expect(result).toEqual(6);
  });

  it('list.map(doubler) should double a list', () => {
    let list = SLL.fromArray([1,2,3]);
    let result = list.map(n => n.value * 2);
    expect(result).toEqual(SLL.fromArray([2,4,6]));
  });

  it('list.filter(isEven) should filter out odd numbers', () => {
    let list = SLL.fromArray([1,2,3,4]);
    let result = list.filter(n => n.value % 2 === 0);
    expect(result).toEqual(SLL.fromArray([2,4]));
  })

  it('list.find(value) return fist node containg value', () => {
    let list = SLL.fromArray([1,2,3,2,1]);
    let result = list.find(2);
    expect(list.next).toEqual(result);
    result = result.next.find(2);
    expect(result).toEqual(list.getNthFromLast(1));
  });

  it('getNth shuold return the corect node', () => {
    let list = SLL.fromArray([1,2,3,4]);
    expect(list.getNth(0)).toEqual(list);
    expect(list.getNth(1)).toEqual(list.next);
    expect(list.getNth(2)).toEqual(list.next.next);
    expect(list.getNth(3)).toEqual(list.next.next.next);
  });

  it('getFirst getSecond and getThird', () => {
    let list = SLL.fromArray([1,2,3,4]);
    expect(list.getFirst()).toEqual(list);
    expect(list.getSecond()).toEqual(list.next);
    expect(list.getThird()).toEqual(list.next.next);
  });


})

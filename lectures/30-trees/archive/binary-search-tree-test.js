'use strict'

const expect = require('expect');
const BSTNode = require('../binary-search-tree');

describe('testing bst', () => {
  afterEach(() => expect.restoreSpies())
  it('should create a bst ', () => {
    let bst = new BSTNode(4);
    expect(bst).toBeA(BSTNode);
    expect(bst.value).toEqual(4);
    expect(bst.left).toEqual(null);
    expect(bst.right).toEqual(null);
  });

  it('BSTNode.fromArray should create a balanced bst ', () => {
    let bst = BSTNode.fromArray([7,5,2,1,4,3,6]);
    expect(bst).toBeA(BSTNode);
    expect(bst.value).toEqual(4);
    expect(bst.left.value).toEqual(2);
    expect(bst.left.left.value).toEqual(1);
    expect(bst.left.right.value).toEqual(3);
    expect(bst.right.value).toEqual(6);
    expect(bst.right.left.value).toEqual(5);
    expect(bst.right.right.value).toEqual(7);
  });

  it('node.addNode should add a node to the the tree', () => {
    let bst = new BSTNode(4);
    bst.addNode(new BSTNode(2))
    bst.addNode(new BSTNode(1))
    bst.addNode(new BSTNode(3))

    bst.addNode(new BSTNode(6))
    bst.addNode(new BSTNode(5))
    bst.addNode(new BSTNode(7))

    expect(bst.value).toEqual(4);
    expect(bst.left.value).toEqual(2);
    expect(bst.left.left.value).toEqual(1);
    expect(bst.left.right.value).toEqual(3);
    expect(bst.right.value).toEqual(6);
    expect(bst.right.left.value).toEqual(5);
    expect(bst.right.right.value).toEqual(7);
  })

  it('node.find should return a node or null', () => {
    let bst = BSTNode.fromArray([7,5,2,1,4,3,6]);
    let node = bst.find(7)
    expect(node).toBeA(BSTNode);
    expect(node.value).toEqual(7);
    expect(node.left).toEqual(null);
    expect(node.right).toEqual(null);

    node = bst.find(2)
    expect(node).toBeA(BSTNode);
    expect(node.value).toEqual(2);
    expect(node.left).toBeA(BSTNode);
    expect(node.right).toBeA(BSTNode);
  });

  it('node.max should return max', () => {
    let bst = BSTNode.fromArray([7,5,2,1,4,3,6]);
    expect(bst.max()).toEqual(7);
  });

  it('node.min should return min', () => {
    let bst = BSTNode.fromArray([7,5,2,1,4,3,6]);
    expect(bst.min()).toEqual(1);
  });

  it('node.toString should be a prettyPrint', () => {
    let bst = BSTNode.fromArray([7,5,2,1,4,3,6]);
    expect(bst.toString()).toEqual('\n4\n 2\n  1\n  3\n 6\n  5\n  7')
  })

  it('node.prettyPrint should call toString and console.log', () => {
    let bst = BSTNode.fromArray([7,5,2,1,4,3,6]);
    let toStringSpy = expect.spyOn(bst, 'toString');
    let consoleSpy = expect.spyOn(console, 'log');
    bst.prettyPrint();

    expect(toStringSpy.calls.length).toEqual(1);
    expect(consoleSpy.calls.length).toEqual(1);
  });
})


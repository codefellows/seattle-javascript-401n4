'use strict';

const expect = require('expect');
const Tree = require('../tree');

describe('testing Tree', function(){
  it('should create a tree', function(){
    let head = new Tree();
    expect(head).toBeA(Tree);
    expect(head.children).toEqual(null);
    expect(head.childrenCount).toEqual(0);
  });

  it('should throw an error with invalid input', () => {
    let head = new Tree();
    let danger = () => head.appendChild(3)
    expect(danger).toThrow()
  });

  it('tree.appendChild(node) should add a child node', () => {
    let head = new Tree(0);
    head.appendChild(new Tree(1));
    head.appendChild(new Tree(2));
    head.appendChild(new Tree(3));

    expect(head.getNthChild(0)).toEqual(head.children.value);
    expect(head.getNthChild(1)).toEqual(head.children.next.value);
    expect(head.getNthChild(2)).toEqual(head.children.next.next.value);
    expect(head.getNthChild(3)).toEqual(undefined);
  });

  it('tree.removeChild(node) should remove a child', () => {
    let head = new Tree(0);
    let firstChild= new Tree(1);
    let secondChild = new Tree(2);
    head.appendChild(firstChild);
    head.appendChild(secondChild);
    head.removeChild(secondChild);
    expect(head.children.next).toEqual(null);
    head.removeChild(firstChild);
    expect(head.children).toEqual(null);
  })
});


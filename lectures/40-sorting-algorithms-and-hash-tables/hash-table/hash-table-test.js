'use strict'

const expect = require('expect');
const HashTable = require('../hash-table');

describe('testing HashTable', function(){
  it('should create a hash table', () => {
    let store = new HashTable(); expect(store).toBeA(HashTable);
    expect(store.size).toEqual(1000);

    store = new HashTable(100);
    expect(store.size).toEqual(100);
  })

  it('hashTable.hash(key) should return an index', () => {
    let store = new HashTable()
    expect(store.hash('hola')).toEqual(420);
    expect(store.hash('halo')).toEqual(420);
    store = new HashTable(100);
    expect(store.hash('hola')).toEqual(420 % 100);
    expect(store.hash('halo')).toEqual(420 % 100);
  });

  it('hashTable.set(key, value) should store a value', () => {
    let store = new HashTable();

    store.set('hello world', 'cool beans');
    let list = store[store.hash('hello world')];
    expect(list.value.key).toEqual('hello world');
    expect(list.value.value).toEqual('cool beans');

    store.set('hello world', 'lulwat');
    expect(list.value.key).toEqual('hello world');
    expect(list.value.value).toEqual('lulwat');

    store.set('hello wordl', 'sweet');
    expect(list.next.value.key).toEqual('hello wordl');
    expect(list.next.value.value).toEqual('sweet');
  });

  it('hashTable.get(key) should retrieve a stored value or undefined', () => {
    let store = new HashTable()
    expect(store.get('haha')).toEqual(undefined);
    
    store.set('one', 'one');
    expect(store.get('one')).toEqual('one');
    store.set('eno', 'two')
    expect(store.get('eno')).toEqual('two');

    store.set('three', 'three')
    expect(store.get('three')).toEqual('three');
    store.set('eerht', 'four')
    expect(store.get('eerht')).toEqual('four');

    store[store.hash('three')] = undefined
    expect(store.get('eerht')).toEqual(undefined);
    expect(store.get('three')).toEqual(undefined);
  });

  it('hashTable.remove(key) should remove a value from the store', () => {
    let store = new HashTable()

    store.set('hello', 'hello');
    store.set('olleh', 'olleh');

    store.remove('hello')
    expect(store.get('hello')).toEqual(undefined)

    //expect(store.get('olleh')).toEqual('olleh')

    store.remove('olleh')
    expect(store.get('olleh')).toEqual(undefined)
  });
});


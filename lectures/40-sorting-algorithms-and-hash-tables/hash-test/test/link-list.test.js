const LinkedList = require('../lib/linked-list')

describe('LinkedList Test', () => {
  test('can append', () => {
    let ll = new LinkedList()
    ll.append({key: 'steve'})
    ll.append({key: 'tyler'})
    ll.append({key: 'tom'})

    expect(ll.get('steve')).toBeTruthy()
    expect(ll.get('tyler')).toBeTruthy()
    expect(ll.get('tom')).toBeTruthy()

    expect(ll.get('NOPE')).toBeFalsy()
  })
})

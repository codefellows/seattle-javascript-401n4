const HashMap = require('../lib/hash-map.js')
const LinkedList = require('../lib/linked-list.js')

describe('hash map', () => {
  test('we should be able to add something', () => {
    let map = new HashMap();
    map.put("U District", 98105)
    expect(map.size).toBe(1)
  })

  test('we should be able to get it back', () => {
    let map = new HashMap();
    let key = 'U District'
    let value = 98105
    map.put(key, value)
    expect(map.get(key)).toEqual({key, value})
  })

  test('we should be put and get many things', () => {
    let map = new HashMap();
    let all = [
      {key:"batman", value: "bruce wayne"},
      {key:"ocean", value: "water"},
      {key:"superman", value: "clark kent"},
      {key:"seattle", value: "cool"},
      {key:"washington", value: "also cool"},
      {key:"foo", value: 42},
      {key:"array", value: [1,2,3]},
    ]
    all.forEach(item => {
      console.log(item.key, map.hash(item.key), map.hash(item.key) % map.buckets.length)
      map.put(item.key, item.value)
    })
    console.log(map.buckets)
    all.forEach(item => {
      expect(map.get(item.key).value).toEqual(item.value)
    })
  })
})

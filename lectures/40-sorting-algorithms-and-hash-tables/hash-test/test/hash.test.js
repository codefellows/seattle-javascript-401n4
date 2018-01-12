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
      {key: "code fellows", value: "401"},
      {key: "sdfgdfs", value: "404"},
      {key: "iwendkjs", value: "401"},
      {key: "rioejf23wefs", value: "401"},
      {key: "dlkfn21oi3rnw", value: "401"},
      {key: "ldfkn2k3w", value: "401"},
      {key: "lord of the rings", value: "401"}
    ]
    all.forEach(item => {
      let key = item.key
      let hash = map.hash(key)
      let index = hash % map.buckets.length
      console.log("KEY:", key, "HASH:", hash, "INDEX:", index)
      map.put(item.key, item.value)
    })
    console.log(map.buckets)
    all.forEach(item => {
      expect(map.get(item.key).value).toEqual(item.value)
    })
  })
})

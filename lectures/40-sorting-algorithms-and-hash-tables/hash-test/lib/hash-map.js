const LinkedList = require('./linked-list')

class HashMap {
  constructor() {
    this.size = 0
    this.buckets = new Array(170)
  }

  put(key, value) {
    this.size++
    let hash = this.hash(key)
    let index = hash % this.buckets.length
    // {key: key, value: value}
    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList()
    }
    this.buckets[index].append({key, value})
  }

  get(key) {
    // use the key to calculate a hash
    // turn the hash into a bucket index
    let hash = this.hash(key)
    let index = hash % this.buckets.length
    let list = this.buckets[index]

    // if the bucket is undefined then nothing was ever set there
    if (list === undefined) {
      return null
    }

    // otherwise, we have to look through the things in the bucket
    // and find the thing with the key we're looking for
    let current = list.root
    while (current) {
      if (current.data.key === key) {
        return current.data
      }
      current = current.next
    }
    return  null
  }

  hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash
  }
}

module.exports = HashMap

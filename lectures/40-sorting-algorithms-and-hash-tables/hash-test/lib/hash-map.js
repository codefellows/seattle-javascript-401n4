class HashMap {
  constructor() {
    this.size = 0
    this.buckets = new Array(17)
  }

  put(key, value) {
    this.size++
    let hash = this.hash(key)
    let index = hash % this.buckets.length
    // {key: key, value: value}
    this.buckets[index] = {key, value}
  }

  get(key) {
    let hash = this.hash(key)
    let index = hash % this.buckets.length
    return this.buckets[index]
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

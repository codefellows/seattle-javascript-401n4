class ListNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  append(data) {
    if (!this.root) {
      this.root = new ListNode(data)
    } else {
      let current = this.root
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(data)
    }
  }

  get(searchKey) {
    if (!this.root) {
      return null
    }

    let current = this.root
    while (current) {
      if (current.data.key === searchKey) {
        return current.data
      }
      current = current.next;
    }
    return null
  }
}

module.exports = LinkedList

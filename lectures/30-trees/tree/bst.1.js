const BstNode = module.exports = class {
  constructor(key, val=null) {
    this.key = key
    this.val = val
    this.data = null
    this.parent = null
    this.left = null
    this.right = null
  }

  preOrder(cb) {
    _walk(this)

    function _walk(node) {
      cb(node)
      if(node.left) _walk(node.left)
      if(node.right) _walk(node.right)
    }
  }

  inOrder(cb) {
    _walk(this)

    function _walk(node) {
      if(node.left) _walk(node.left)
      cb(node)
      if(node.right) _walk(node.right)
    }
  }

  postOrder(cb) {
    _walk(this)

    function _walk(node) {
      if(node.left) _walk(node.left)
      if(node.right) _walk(node.right)
      cb(node)
    }
  }

  breadthFirst(cb) {
    let q = [this]
    let current

    while(q.length > 0) {
      current = q.pop()
      cb(current)
      if(current.left) q.unshift(current.left)
      if(current.right) q.unshift(current.right)
    }
    return result
  }

  contains(key) {
    if(key === this.key) return true
    if(key < this.key) {
      if(!this.left) return false
      return this.left.contains(key)
    }
    if(key > this.key) {
      if(!this.right) return false
      return this.right.contains(key)
    }
  }

  lookup(key) {
    if(key === this.key) return this
    if(key < this.key) {
      if(!this.left) return null
      return this.left.lookup(key)
    }
    if(key > this.key) {
      if(!this.right) return null
      return this.rightleft.lookup(key)
    }
  }

  insert(node, balance=true) {
    if(!node instanceof BstNode) throw new Error('VALIDATION ERROR: Value must be BstNode')
    if(node.key === this.key) throw new Error('VALIDATION ERROR: Value must be unique')
    if(node.key > this.key) {
      if(!this.right) {
        this.right = node
        this.right.parent = this
        if(balance) this.right.selfBalance()
      } else this.right.insert(node, balance)
    } else if(node.key < this.key) {
      if(!this.left) {
        this.left = node
        this.left.parent = this
        if(balance) this.left.selfBalance()
      } else this.left.insert(node, balance)
    }
    return 
  }

  delete() {
    // find the node you want
    // check to see if there are no children
    // defreference that node
    // check to see if there is one child
    // set that child as the successor to the node you're removing
    // defreference that node
    // check to see if there are two children
    // nuke it with fire!! (reference the wiki pseudo code)
  }

  depth() {
    let leftDepth = this.left ? this.left.depth() : 0
    let rightDepth = this.right ? this.right.depth() : 0
    return Math.max(leftDepth, rightDepth) + 1
  }

  isBalanced() {
    let leftDepth = this.left ? this.left.depth() : 0
    let rightDepth = this.right ? this.right.depth() : 0
    return leftDepth - rightDepth
  }

  rotateRight() {
    let pivot = this.left
    if(!pivot) return

    
  }

  rotateLeft() {
    let pivot = this.right
    if(!pivot) return
    // [this.val, pivot.val] = [pivot.val, this.val]
    [this.key, pivot.key] = [pivot.key, this.key]
    this.right = pivot.right

    if(this.right) this.right.parent = this
    pivot.right = pivot.left

    if(pivot.right) pivot.right.parent = pivot
    pivot.left = this.left

    if(pivot.left) pivot.left.parent = pivot
    [this.left, pivot.parent] = [pivot, this]
  }

  selfBalance() {
    let balance = this.isBalanced()
    console.log('balance', balance)
    if(balance === 2) {
      if(this.left.isBalanced() <= -1) this.left.rotateLeft()
      this.rotateRight()
      if(this.parent) this.parent.selfBalance()
    } else if(balance === -2) {
      if(this.right.isBalanced() >= 1) this.right.rotateRight()
      this.rotateLeft()
      if(this.parent) this.parent.selfBalance()
    } 
    else {
      if(this.parent) this.parent.selfBalance()
      console.log('parent', this.parent)
    }
  }

  getDotInfo() {
    let result = 'digraph { '

    this.preOrder(node => {
      if(!node) return
      if(node.left) result += `${node.key} -> ${node.left.key} `
      if(node.right) result += `${node.key} -> ${node.right.key} `
    })

    return `${result};}`
  }

  treeify() {
    return Viz(this.getDotInfo())
  }
}

function compareTrees(bstOne, bstTwo) {
  if(!!bstOne !== !!bstTwo) return false
  if(bstOne.left && bstTwo.left) compareTrees(bstOne.left, bstTwo.left)
  if(bstOne.right && bstTwo.right) compareTrees(bstOne.right, bstTwo.right)
  return true
}
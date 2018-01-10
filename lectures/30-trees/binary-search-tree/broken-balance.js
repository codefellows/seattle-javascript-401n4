BSTNode.prototype.rebalance = function(){
  let treeToVine = (root) => {
    let tail = root;
    let rest = root.right;
    while(rest){
      if(!rest.left){
        tail = rest;
        rest = rest.right;
      } else {
        let temp = rest.left;
        rest.left = temp.right;
        temp.right = rest;
        rest = temp;
        tail.right = temp;
      }
    }
  };
  let compress = (root, count) => {
    let scanner = root;
    for(let i=0;i<count;i++){
      let child = scanner.right;
      scanner.right = child.right;
      scanner = scanner.right;
      child.right = scanner.left;
      scanner.left = child;
    }
  };
  let vineToTree = (root, size) => {
    compress(root, size);
    size = size - leaves;
    while (size > 1) {
      compress(root, size/2)
      size /= 2
    }
  };
  let pseudoRoot = new BSTNode();
  treeToVine(pseudoRoot);
  vineToTree(pseudoRoot.right, this.count)
  return pseudoRoot;
}

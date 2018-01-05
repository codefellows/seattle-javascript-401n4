// {value, left=node, right=node}
const tree = require('./tree');

const DFS = function(node) {
  console.log(node.value);
  if (node.left) DFS(node.left);
  if (node.right) DFS(node.right);
};

DFS(tree);

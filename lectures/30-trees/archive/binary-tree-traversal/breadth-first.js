const tree = require('./tree');

const nodeQueue = [];

nodeQueue.push(tree);

while(nodeQueue.length) {
  let current = nodeQueue.shift();
  console.log(current.value);
  if (current.left) nodeQueue.push(current.left);
  if (current.right) nodeQueue.push(current.right);
};

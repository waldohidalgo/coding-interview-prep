var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.add = function (value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = new Node(value);
            return;
          } else {
            currentNode = currentNode.left;
          }
        }
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = new Node(value);
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
        if (value === currentNode.value) {
          return null;
        }
      }
    }
  };
  // Only change code below this line

  this.levelOrder = function () {
    if (this.root === null) return null;
    const values = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;
  };

  this.reverseLevelOrder = function () {
    if (this.root === null) return null;
    const values = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return values;
  };

  // Only change code above this line
}
const tree = new BinarySearchTree();
console.log(tree.add(7));
console.log(tree.add(1));
console.log(tree.add(9));
console.log(tree.add(0));
console.log(tree.add(3));
console.log(tree.add(8));
console.log(tree.add(10));
console.log(tree.add(2));
console.log(tree.add(5));
console.log(tree.add(4));
console.log(tree.add(6));
console.log(tree.reverseLevelOrder());

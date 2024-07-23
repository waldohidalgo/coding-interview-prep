var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  // Only change code below this line

  this.invert = function () {
    if (this.root === null) return null;
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      [node.left, node.right] = [node.right, node.left];
    }
    return this;
  };

  this.invert1 = function () {
    if (this.root === null) return null;

    function invert(node) {
      if (node === null) return null;
      [node.left, node.right] = [invert(node.right), invert(node.left)];
      return node;
    }
    return invert(this.root);
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
tree.invert1();

displayTree(tree);

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  // Only change code below this line

  this.findMaxHeight = function () {
    if (this.root === null) return -1;
    function maxHeight(node) {
      if (node === null) return 0;
      if (node.left === null && node.right === null) return 0;
      return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
    }
    return maxHeight(this.root);
  };

  this.findMinHeight = function () {
    if (this.root === null) return -1;
    function minHeight(node) {
      if (node === null) return 0;
      if (node.left === null && node.right === null) return 0;
      if (node.left === null && node.right) return 0;
      if (node.right === null && node.left) return 0;
      return Math.min(minHeight(node.left), minHeight(node.right)) + 1;
    }
    return minHeight(this.root);
  };

  this.isBalanced = function () {
    const maxHeight = this.findMaxHeight();
    const minHeight = this.findMinHeight();

    return maxHeight - minHeight <= 1;
  };

  // Only change code above this line
}
const tree = new BinarySearchTree();
console.log(tree.add(100));
console.log(tree.add(110));
console.log(tree.add(90));
console.log(tree.add(80));
console.log(tree.add(70));
console.log(tree.isBalanced());
//displayTree(tree);

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  this.findMin = function () {
    if (this.root === null) return null;
    let currentNode = this.root;
    let minValue = currentNode.value;
    while (currentNode.left) {
      minValue = currentNode.left.value;
      currentNode = currentNode.left;
    }
    return minValue;
  };

  this.findMax = function () {
    if (this.root === null) return null;
    let currentNode = this.root;
    let maxValue = currentNode.value;
    while (currentNode.right) {
      maxValue = currentNode.right.value;
      currentNode = currentNode.right;
    }
    return maxValue;
  };

  // Only change code above this line
}
const tree = new BinarySearchTree();
console.log(tree.add(5));
console.log(tree.add(3)); // tree.add(3);
console.log(tree.add(2));
console.log(tree.add(4));
console.log(tree.add(-55));
console.log(tree.add(489));
console.log(tree.findMax());
console.log(tree.findMin());

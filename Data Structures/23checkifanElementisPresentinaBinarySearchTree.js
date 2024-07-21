var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.isPresent = function (number) {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === number) {
        return true;
      } else if (number < currentNode.value) {
        currentNode = currentNode.left;
      } else if (number > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  };
  // Only change code above this line
}

const tree = new BinarySearchTree();
console.log(tree.add(4));
console.log(tree.add(7));
console.log(tree.add(411));

console.log(tree.isPresent(100));

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.remove = function (value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    var direction = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        direction = "left";
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        direction = "right";
        return findValue(node.right);
      } else {
        return null;
      }
    }).bind(this)();
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target?.left !== null ? 1 : 0) + (target?.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    // Only change code below this line
    if (children == 1) {
      if (target !== this.root) {
        if (direction == "left") {
          parent.left = target.left !== null ? target.left : target.right;
        } else {
          parent.right = target.right !== null ? target.right : target.left;
        }
      } else {
        this.root = target.left !== null ? target.left : target.right;
      }
    }
  };
}
const tree = new BinarySearchTree();
console.log(tree.add(7));
console.log(tree.add(1));
console.log(tree.add(9));
console.log(tree.add(0));
console.log(tree.add(3));
// console.log(tree.add(8));
console.log(tree.add(10));
// console.log(tree.add(2));
// console.log(tree.add(5));
// console.log(tree.add(4));
// console.log(tree.add(6));
console.log(tree.remove(9));
displayTree(tree);

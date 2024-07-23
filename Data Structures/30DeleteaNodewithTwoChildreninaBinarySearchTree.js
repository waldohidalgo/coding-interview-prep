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
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
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
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
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
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    // Only change code below this line
    else if (children == 2) {
      let targetMin = null;
      let targetMinParent = null;

      function findTargetMin(node = target.right, parent = target) {
        if (node.left === null) {
          targetMin = node;
          targetMinParent = parent;
        } else {
          return findTargetMin(node.left, node);
        }
      }

      findTargetMin();

      target.value = targetMin.value;
      const childrenTargetMin =
        (targetMin.left !== null ? 1 : 0) + (targetMin.right !== null ? 1 : 0);
      if (childrenTargetMin === 0) {
        if (targetMinParent.left == targetMin) {
          targetMinParent.left = null;
        } else {
          targetMinParent.right = null;
        }
      }

      if (childrenTargetMin == 1) {
        target.right = targetMin.right;
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
console.log(tree.add(8));
console.log(tree.add(18));
console.log(tree.add(15));
console.log(tree.add(13));
console.log(tree.add(14));
// console.log(tree.add(6));
console.log(tree.remove(9));
displayTree(tree);

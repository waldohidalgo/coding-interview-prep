var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line

  if (tree.root === null) return false;
  if (tree.root instanceof Node) {
    if (tree.root.left instanceof Node && tree.root.right === null) {
      if (tree.root.left.value >= tree.root.value) {
        return false;
      } else {
        return isBinarySearchTree({ root: tree.root.left });
      }
    }
    if (tree.root.left === null && tree.root.right instanceof Node) {
      if (tree.root.right.value < tree.root.value) {
        return false;
      } else {
        return isBinarySearchTree({ root: tree.root.right });
      }
    }
    if (tree.root.left instanceof Node && tree.root.right instanceof Node) {
      if (
        tree.root.left.value >= tree.root.value ||
        tree.root.right.value <= tree.root.value
      ) {
        return false;
      } else {
        return (
          isBinarySearchTree({ root: tree.root.left }) &&
          isBinarySearchTree({ root: tree.root.right })
        );
      }
    }

    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

const tree = new BinarySearchTree();
console.log(tree.add(100));
console.log(tree.add(110));
console.log(tree.add(90));
//displayTree(tree);
console.log(isBinarySearchTree(tree));

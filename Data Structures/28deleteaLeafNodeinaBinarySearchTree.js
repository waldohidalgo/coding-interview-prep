var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  // Only change code below this line

  this.remove = function (value) {
    let nodeToDelete = null;
    let parentNode = null;

    let currentNode = this.root;

    function findNodeToDelete(node) {
      if (node === null) return null;
      if (node.value === value) {
        nodeToDelete = node;
      } else if (value < node.value) {
        parentNode = node;
        findNodeToDelete(node.left);
      } else if (value > node.value) {
        parentNode = node;
        findNodeToDelete(node.right);
      }
    }

    function childrenCount(node) {
      if (node.left && node.right) {
        return 2;
      } else if (node.left || node.right) {
        return 1;
      } else {
        return 0;
      }
    }

    if (this.root === null) return null;

    if (currentNode.value === value) {
      this.root = null;
      return null;
    } else {
      findNodeToDelete(currentNode);
      if (!nodeToDelete) {
        return null;
      } else {
        if (childrenCount(nodeToDelete) === 0) {
          if (parentNode.left === nodeToDelete) {
            parentNode.left = null;
          } else if (parentNode.right === nodeToDelete) {
            parentNode.right = null;
          }
        }
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
console.log(tree.add(10));
// console.log(tree.add(2));
// console.log(tree.add(5));
// console.log(tree.add(4));
// console.log(tree.add(6));
console.log(tree.remove(333));
displayTree(tree);

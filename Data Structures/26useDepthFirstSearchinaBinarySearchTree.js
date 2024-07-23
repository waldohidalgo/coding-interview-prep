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

  this.inorder = function () {
    if (this.root === null) return null;
    const result = [];

    function traverse(node) {
      if (!node.left && !node.right) {
        result.push(node.value);
      }
      if (node.left && !node.right) {
        traverse(node.left);
        result.push(node.value);
      }
      if (!node.left && node.right) {
        result.push(node.value);
        traverse(node.right);
      }
      if (node.left && node.right) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  };

  this.preorder = function () {
    if (this.root === null) return null;
    const result = [];
    result.push(this.root.value);
    function traverse(node) {
      if (node.left && node.right) {
        result.push(node.left.value);
        traverse(node.left);
        result.push(node.right.value);
        traverse(node.right);
      }
      if (node.left && !node.right) {
        result.push(node.left.value);
        traverse(node.left);
      }
      if (!node.left && node.right) {
        result.push(node.right.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  };

  this.postorder = function () {
    if (this.root === null) return null;
    const result = [];
    function traverse(node) {
      if (!node.left && !node.right) {
        result.push(node.value);
      }
      if (node.left && !node.right) {
        traverse(node.left);
        result.push(node.value);
      }
      if (!node.left && node.right) {
        traverse(node.right);
        result.push(node.value);
      }
      if (node.left && node.right) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    }

    traverse(this.root);
    return result;
  };

  // Only change code above this line
}
const tree = new BinarySearchTree();
console.log(tree.add(100));
console.log(tree.add(110));
console.log(tree.add(90));
console.log(tree.add(80));
console.log(tree.add(70));
console.log(tree.add(95));
//console.log(tree.add(111));

console.log(tree.inorder());
console.log(tree.preorder());
console.log(tree.postorder());

# Coding Interview Prep

Repositorio con mis soluciones a los problemas presentes en la página [Coding Interview Prep
](https://www.freecodecamp.org/learn/coding-interview-prep/) de freecodecamp. Los problemas se dividen en dos temas: **Algorithms** y **Data Structures** utilizando javascript.

## Tabla de Contenidos

- [Coding Interview Prep](#coding-interview-prep)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Lista de Data Structures](#lista-de-data-structures)
    - [1-Stack](#1-stack)
    - [2-Queue](#2-queue)
    - [3-Priority Queue](#3-priority-queue)
    - [4-Circular Queue](#4-circular-queue)
    - [5-Set](#5-set)
    - [6-Map](#6-map)
    - [7-Tabla Hash](#7-tabla-hash)
    - [8- Linked List](#8--linked-list)
    - [8-Doubly Linked List](#8-doubly-linked-list)
    - [9-Binary Search Tree](#9-binary-search-tree)
      - [9.1-Add a new element to a Binary Search Tree](#91-add-a-new-element-to-a-binary-search-tree)
      - [9.2-Find the Minimum and Maximum Value in a Binary Search Tree](#92-find-the-minimum-and-maximum-value-in-a-binary-search-tree)
      - [9.3-Check if an Element is Present in a Binary Search Tree](#93-check-if-an-element-is-present-in-a-binary-search-tree)
      - [9.4-Check if Tree is Binary Search Tree](#94-check-if-tree-is-binary-search-tree)

## Lista de Data Structures

### 1-Stack

```js
function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.push = function (element) {
    collection.push(element);
  };

  this.pop = function () {
    return collection.pop();
  };

  this.peek = function () {
    return collection[collection.length - 1];
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };

  this.clear = function () {
    collection = [];
  };

  this.print = function () {
    console.log(collection);
  };

  // Only change code above this line
}
```

### 2-Queue

```js
function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };

  // Only change code above this line
}
```

### 3-Priority Queue

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line

  this.enqueue = function (element) {
    this.collection.push(element);
  };

  this.dequeue = function () {
    const orderCollectiobyPriority = this.collection
      .map((x, i) => [x[0], x[1], i])
      .sort((a, b) => a[1] - b[1]);

    const elementToRemove = orderCollectiobyPriority[0];
    const indexToRemove = elementToRemove[2];
    this.collection.splice(indexToRemove, 1);
    return elementToRemove[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };

  this.front = function () {
    const orderCollectiobyPriority = this.collection
      .map((x, i) => [x[0], x[1], i])
      .sort((a, b) => a[1] - b[1]);
    return orderCollectiobyPriority[0][0];
  };
  // Only change code above this line
}
```

### 4-Circular Queue

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    if (this.queue[this.write] === null) {
      const nextWrite = (this.write + 1) % (this.max + 1);
      this.queue[this.write] = item;
      this.write = nextWrite;

      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    if (this.queue[this.read] !== null) {
      const nextRead = (this.read + 1) % (this.max + 1);
      const item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = nextRead;
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```

### 5-Set

Clase Set con operaciones de agregación, eliminación, unión, intersección, diferencia y chequear si un set es subset de otro:

```js
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }
  // This is our intersection method
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach((value) => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  difference(set) {
    const newSet = new Set();

    this.values().forEach((value) => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    });

    return newSet;
  }
  // Only change code below this line
  isSubsetOf(otherSet) {
    let isSubsetFlag = true;
    for (let value of this.values()) {
      if (otherSet.has(value)) {
        isSubsetFlag = true;
      } else {
        isSubsetFlag = false;
        break;
      }
    }

    return isSubsetFlag;
  }
  // Only change code above this line
}
```

### 6-Map

```js
const Map = function () {
  this.collection = {};
  // Only change code below this line

  this.add = function (key, value) {
    this.collection[key] = value;
  };

  this.remove = function (key) {
    delete this.collection[key];
  };

  this.get = function (key) {
    return this.collection[key];
  };

  this.has = function (key) {
    return key in this.collection;
  };

  this.values = function () {
    return Object.values(this.collection);
  };

  this.size = function () {
    return Object.keys(this.collection).length;
  };

  this.clear = function () {
    this.collection = {};
  };

  // Only change code above this line
};
```

### 7-Tabla Hash

Tabla hash con función de hasheo determinista:

```js
var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // Only change code below this line

  this.add = function (key, value) {
    const keyHash = hash(key);
    if (!this.collection[keyHash]) {
      this.collection[keyHash] = {
        [key]: value,
      };
    } else {
      this.collection[keyHash] = {
        ...this.collection[keyHash],
        [key]: value,
      };
    }
  };

  this.remove = function (key) {
    const keyHash = hash(key);
    const objAssociatedWithKey = this.collection[keyHash];
    if (Object.keys(objAssociatedWithKey).length === 1) {
      delete this.collection[keyHash];
    } else {
      delete this.collection[keyHash][key];
    }
  };

  this.lookup = function (key) {
    const keyHash = hash(key);
    if (this.collection[keyHash]) {
      return this.collection[keyHash][key];
    }
    return null;
  };

  // Only change code above this line
};
```

### 8- Linked List

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  // Only change code below this line

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode.element;
      }
      currentNode = currentNode.next;
      count++;
    }
  };

  // Only change code above this line

  this.addAt = function (index, element) {
    if (index < 0 || index > length) {
      return false;
    } else {
      const node = new Node(element);
      if (index === 0) {
        node.next = head;
        head = node;
        length++;
        return element;
      } else {
        let currentNode = head;
        let previousNode;
        let i = 0;
        while (i < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          i++;
        }

        node.next = currentNode;
        previousNode.next = node;
        length++;

        return element;
      }
    }
  };
}
```

### 8-Doubly Linked List

```js
var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // Only change code below this line

  this.add = function (data) {
    if (this.head === null) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data, this.tail);
      this.tail = this.tail.next;
    }
  };

  this.remove = function (data) {
    if (this.head === null) return null;
    else {
      let node = this.head;
      while (node !== null) {
        if (node.data === data) {
          if (node === this.head) {
            this.head = node.next;
            this.head.prev = null;
          } else if (node === this.tail) {
            this.tail = node.prev;
            this.tail.next = null;
          } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
          }
        }
        node = node.next;
      }
    }
  };
  this.reverse = function () {
    // recorrido desde la head hasta la tail
    if (this.head === null) return null;
    else {
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode !== null) {
        [currentNode.next, currentNode.prev] = [previousNode, currentNode.next];
        previousNode = currentNode;
        currentNode = currentNode.prev;
      }
      [this.head, this.tail] = [this.tail, this.head];
    }
  };

  this.reverse1 = function () {
    //recorrido desde la tail hasta la head
    if (this.head === null) return null;
    else {
      let currentNode = this.tail;
      let nextNode = null;

      while (currentNode !== null) {
        [currentNode.next, currentNode.prev] = [currentNode.prev, nextNode];
        nextNode = currentNode;
        currentNode = currentNode.next;
      }
      [this.head, this.tail] = [this.tail, this.head];
    }
  };
  // Only change code above this line
};
```

### 9-Binary Search Tree

#### 9.1-Add a new element to a Binary Search Tree

```js
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
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
  // Only change code above this line
}
```

#### 9.2-Find the Minimum and Maximum Value in a Binary Search Tree

```js
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
```

#### 9.3-Check if an Element is Present in a Binary Search Tree

```js
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
```

#### 9.4-Check if Tree is Binary Search Tree

Creo algoritmo en base a lo señalado en el enunciado:

> The main distinction of a binary search tree is that the nodes are ordered in an organized > fashion. Nodes have at most 2 child nodes (placed to the right and/or left) based on if the > child node's value is greater than or equal to (right) or less than (left) the parent node.

```js
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
```
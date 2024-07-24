# Coding Interview Prep

Repositorio con mis soluciones a los problemas presentes en la página [Coding Interview Prep
](https://www.freecodecamp.org/learn/coding-interview-prep/) de freecodecamp. Los problemas se dividen en dos temas: **Algorithms** y **Data Structures** resueltos utilizando javascript.

## Tabla de Contenidos

- [Coding Interview Prep](#coding-interview-prep)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Algorithms](#algorithms)
    - [100% Completed](#100-completed)
    - [Lista de Algoritmos](#lista-de-algoritmos)
      - [1-Find the Symmetric Difference](#1-find-the-symmetric-difference)
      - [2-Inventory Update](#2-inventory-update)
      - [3-No Repeats Please](#3-no-repeats-please)
      - [4-Pairwise](#4-pairwise)
      - [5-Implement Bubble Sort](#5-implement-bubble-sort)
      - [6-Implement Selection Sort](#6-implement-selection-sort)
      - [7-Implement insertion Sort](#7-implement-insertion-sort)
      - [8-Implement Quick Sort](#8-implement-quick-sort)
      - [9-Implement Merge Sort](#9-implement-merge-sort)
      - [10-Implement Binary Search](#10-implement-binary-search)
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
      - [9.5-Find the Minimum and Maximum Height of a Binary Search Tree](#95-find-the-minimum-and-maximum-height-of-a-binary-search-tree)
      - [9.6-Use Depth First Search in a Binary Search Tree](#96-use-depth-first-search-in-a-binary-search-tree)
      - [9.7-Use Breadth First Search in a Binary Search Tree](#97-use-breadth-first-search-in-a-binary-search-tree)
      - [9.8-Delete a Leaf Node in a Binary Search Tree](#98-delete-a-leaf-node-in-a-binary-search-tree)
      - [9.9-Delete a Node with One Child in a Binary Search Tree](#99-delete-a-node-with-one-child-in-a-binary-search-tree)
      - [9.10-Delete a Node with Two Children in a Binary Search Tree](#910-delete-a-node-with-two-children-in-a-binary-search-tree)
      - [9.11-Invert a Binary Tree](#911-invert-a-binary-tree)
    - [10-Create a Trie Search Tree](#10-create-a-trie-search-tree)
    - [11-Binary Heap](#11-binary-heap)
      - [11.1-Insert an Element into a Max Heap](#111-insert-an-element-into-a-max-heap)
      - [11.2-Remove an Element from a Max Heap](#112-remove-an-element-from-a-max-heap)
      - [11.3-Implement Heap Sort with a Min Heap](#113-implement-heap-sort-with-a-min-heap)
    - [12-Graphs](#12-graphs)
      - [12.1-Adjacency List](#121-adjacency-list)
      - [12.2-Adjacency Matrix](#122-adjacency-matrix)

## Algorithms

### 100% Completed

![100% Completed Screenshot](./Algorithms/completed.webp)

### Lista de Algoritmos

#### 1-Find the Symmetric Difference

```js
function sym(...args) {
  const sets = args.map((set) => new Set(set));

  const setSym = sets.reduce((set, set2) => {
    let diff = new Set();

    for (let item of set) {
      if (!set2.has(item)) {
        diff.add(item);
      }
    }
    for (let item of set2) {
      if (!set.has(item) && !diff.has(item)) {
        diff.add(item);
      }
    }

    return diff;
  });
  return [...setSym].sort((a, b) => a - b);
}
```

#### 2-Inventory Update

```js
function updateInventory(curInv, newInv) {
  return curInv
    .concat(newInv)
    .reduce((acc, arrItem) => {
      const [qty, item] = arrItem;
      const itemIndex = acc.findIndex((arrItem) => arrItem[1] === item);
      if (itemIndex > -1) {
        acc[itemIndex][0] += qty;
      } else {
        acc.push(arrItem);
      }

      return acc;
    }, [])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
```

#### 3-No Repeats Please

```js
function permAlone(str) {
  function noRepeatPlease(str) {
    if (str.length === 1) {
      return str;
    }

    if (str.length === 2) {
      if (str[0] === str[1]) {
        return [""];
      }
      return [`${str[0]}${str[1]}`, `${str[1]}${str[0]}`];
    }
    let arrayFinal = [];

    for (let i = 0; i < str.length; i++) {
      const newStr = str.slice(0, i) + str.slice(i + 1);
      const array = noRepeatPlease(newStr);

      const newArray = [];

      for (let j = 0; j < array.length; j++) {
        if (str[i] !== array[j][0] && array[j] !== "") {
          newArray.push(str[i] + array[j]);
        }
      }

      arrayFinal = arrayFinal.concat(newArray);
    }

    return arrayFinal;
  }

  return noRepeatPlease(str).length;
}
```

#### 4-Pairwise

```js
function pairwise(arr, arg) {
  const newArr = arr.map((e, i) => ({ [i]: e }));
  const pares = [];
  const indicesYaConsiderados = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (
        !indicesYaConsiderados.includes(j) &&
        !indicesYaConsiderados.includes(i)
      ) {
        if (newArr[i][i] + newArr[j][j] === arg) {
          pares.push([Object.keys(newArr[i])[0], Object.keys(newArr[j])[0]]);
          indicesYaConsiderados.push(j);
          indicesYaConsiderados.push(i);
        }
      }
    }
  }

  return pares.reduce((acc, elem) => acc + +elem[0] + +elem[1], 0);
}
```

#### 5-Implement Bubble Sort

```js
function bubbleSort(array) {
  // Only change code below this line

  if (array.length <= 1) return array;

  let isOrdered = false;
  while (!isOrdered) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        break;
      }
      if (i === array.length - 2) {
        isOrdered = true;
      }
    }
  }
  return array;
  // Only change code above this line
}
```

Sabiendo que en cada recorrido se posiciona el mayor valor al final del array entonces se disminuye el final en cada recorrido lo que permite realizar la siguiente implementación alternativa:

```js
function bubbleSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

#### 6-Implement Selection Sort

```js
function selectionSort(array) {
  // Only change code below this line

  for (let i = 0; i < array.length - 1; i++) {
    const subArr = array.slice(i);
    const minValue = Math.min(...subArr);
    const minIndex = subArr.indexOf(minValue) + i;
    if (minIndex === i) {
      continue;
    } else {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
  // Only change code above this line
}
```

#### 7-Implement insertion Sort

```js
function insertionSort(array) {
  // Only change code below this line

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
  return array;
  // Only change code above this line
}
```

#### 8-Implement Quick Sort

```js
function quickSort(array) {
  // Only change code below this line
  if (array.length <= 1) {
    return array;
  }
  const last = array[array.length - 1];
  const subArr = array.slice(0, array.length - 1);
  const left = [];
  const right = [];
  for (let i = 0; i < subArr.length; i++) {
    if (subArr[i] < last) {
      left.push(subArr[i]);
    } else {
      right.push(subArr[i]);
    }
  }
  return [...quickSort(left), last, ...quickSort(right)];

  // Only change code above this line
}
```

#### 9-Implement Merge Sort

```js
function mergeSort(array) {
  // Only change code below this line
  if (array.length <= 1) {
    return array;
  }

  if (array.length === 2) {
    return merge([array[0]], [array[1]]);
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

  // Only change code above this line
}
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
```

#### 10-Implement Binary Search

```js
function binarySearch(searchList, value) {
  let arrayPath = [];

  const mid = Math.floor((searchList.length - 1) / 2);

  if (searchList[mid] === value) {
    return [searchList[mid]];
  }
  if (searchList.length <= 1) {
    return [null];
  }
  const left = searchList.slice(0, mid);
  const right = searchList.slice(mid + 1);
  arrayPath.push(searchList[mid]);

  if (value < searchList[mid]) {
    arrayPath = arrayPath.concat(binarySearch(left, value));
  } else if (value > searchList[mid]) {
    arrayPath = arrayPath.concat(binarySearch(right, value));
  }

  return arrayPath.includes(value) ? arrayPath : "Value Not Found";
}
```

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

> The main distinction of a binary search tree is that the nodes are ordered in an organized fashion. Nodes have at most 2 child nodes (placed to the right and/or left) based on if the child node's value is greater than or equal to (right) or less than (left) the parent node.

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

#### 9.5-Find the Minimum and Maximum Height of a Binary Search Tree

Además, en base a la altura máxima y la altura mínima se calcula si el árbol esta balanceado o no. Se dice que esta balanceado cuando la diferencia sea a lo más 1:

```js
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
```

#### 9.6-Use Depth First Search in a Binary Search Tree

Se crean los 3 métodos siguientes: **inorder**, **preorder** y **postorder** tal que:

- In-order: muestra los valores desde el nodo más izquierdo y más abajo hacia la derecha
- Pre-order: explora las raíces antes que las hojas desde la izquierda hacia la derecha
- Post-order: explora todas las hojas antes que las raíces desde la izquierda hacia la derecha

```js
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
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
```

#### 9.7-Use Breadth First Search in a Binary Search Tree

Algoritmo implementado en base a lo señalado en el enunciado:

> In this method, we start by adding the root node to a queue. Then we begin a loop where we dequeue the first item in the queue, add it to a new array, and then inspect both its child subtrees. If its children are not null, they are each enqueued. This process continues until the queue is empty.

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  // Only change code below this line

  this.levelOrder = function () {
    if (this.root === null) return null;
    const values = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;
  };

  this.reverseLevelOrder = function () {
    if (this.root === null) return null;
    const values = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return values;
  };

  // Only change code above this line
}
```

#### 9.8-Delete a Leaf Node in a Binary Search Tree

Implementación de algoritmo que elimina nodos **sin hijos**:

```js
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
```

#### 9.9-Delete a Node with One Child in a Binary Search Tree

Implementación de algoritmo que elimina nodo con **solo un hijo**:

```js
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
```

#### 9.10-Delete a Node with Two Children in a Binary Search Tree

Implementación de algoritmo que elimina un nodo que posee **dos hijos**. La eliminación y la posterior reconfiguración del árbol binario se realiza en base a lo señalado en el enunciado del problema siguiente:

> Removing nodes that have two children is the hardest case to implement. Removing a node like this produces two subtrees that are no longer connected to the original tree structure. How can we reconnect them? One method is to find the smallest value in the right subtree of the target node and replace the target node with this value. Selecting the replacement in this way ensures that it is greater than every node in the left subtree it becomes the new parent of but also less than every node in the right subtree it becomes the new parent of. Once this replacement is made the replacement node must be removed from the right subtree. Even this operation is tricky because the replacement may be a leaf or it may itself be the parent of a right subtree. If it is a leaf we must remove its parent's reference to it. Otherwise, it must be the right child of the target. In this case, we must replace the target value with the replacement value and make the target reference the replacement's right child.

Es decir, si el nodo a eliminar tiene 2 hijos, entonces en el nodo derecho (subárbol) se busca el nodo con el menor valor. Si ese nodo no tiene hijos, entonces se reemplaza el valor de este nodo en el valor del nodo a eliminar luego dicho nodo(el nodo de menor valor) se elimina y el padre que apuntaba a este nodo hijo ahora apunta a nulo. Ahora bien, si ese nodo (el nodo de menor valor) tiene un hijo, ese hijo **SIEMPRE** estará ubicado a la derecha ya que si estuviera a la izquierda, entonces el nodo que se esta analizando no sería mínimo por lo que existiría una contradicción ya que el nodo es mínimo. Como el nodo tiene un nodo hijo a la derecha, se reemplaza el valor de ese nodo(el nodo de menor valor) en el nodo a eliminar y el puntero del nodo a eliminar derecho ahora apunta al nodo hijo derecho del nodo que posee menor valor.

```js
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
```

#### 9.11-Invert a Binary Tree

He creado dos algoritmos diferentes que hacen lo mismo invertir un árbol binario. Un árbol binario invertido se dice que cumple con lo siguiente:

> Here will we create a function to invert a binary tree. Given a binary tree, we want to produce a new tree that is equivalently the mirror image of this tree. Running an inorder traversal on an inverted tree will explore the nodes in reverse order when compared to the inorder traversal of the original tree.

Es decir, en un recorrido **inorder** sobre árbol binario invertido, los nodos son explorados en un orden inverso cuando se compara a un recorrido **inorder** sobre el árbol binario original.

```js
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
    // otra manera de hacer lo mismo que el método invert
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
```

### 10-Create a Trie Search Tree

Se crea un **Trie Search Tree** en base al enunciado del problema:

> Here we will move on from binary search trees and take a look at another type of tree structure called a trie. A trie is an ordered search tree commonly used to hold strings, or more generically associative arrays or dynamic datasets in which the keys are strings. They are very good at storing sets of data when many keys will have overlapping prefixes, for example, all the words in a dictionary. Unlike a binary tree, nodes are not associated with actual values. Instead, the path to a node represents a specific key. For instance, if we wanted to store the string code in a trie, we would have four nodes, one for each letter: c — o — d — e. Following that path through all these nodes will then create code as a string — that path is the key we stored. Then, if we wanted to add the string coding, it would share the first three nodes of code before branching away after the d. In this way, large datasets can be stored very compactly. In addition, search can be very quick because it is effectively limited to the length of the string you are storing. Furthermore, unlike binary trees a node can store any number of child nodes. As you might have guessed from the above example, some metadata is commonly stored at nodes that hold the end of a key so that on later traversals that key can still be retrieved. For instance, if we added codes in our example above we would need some way to know that the e in code represents the end of a key that was previously entered. Otherwise, this information would effectively be lost when we add codes.

Se pide crear los siguientes tres métodos **add**, **print** y **isWord** en base a lo siguiente:

> Let's create a trie to store words. It will accept words through an add method and store these in a trie data structure. It will also allow us to query if a given string is a word with an isWord method, and retrieve all the words entered into the trie with a print method. isWord should return a boolean value and print should return an array of all these words as string values. In order for us to verify that this data structure is implemented correctly, we've provided a Node structure for each node in the tree. Each node will be an object with a keys property which is a JavaScript Map object. This will hold the individual letters that are valid keys of each node. We've also created an end property on the nodes that can be set to true if the node represents the termination of a word.

```js
var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  // Only change code below this line
  this.root = new Node();
  this.add = function (word) {
    let currentNode = this.root;
    let i = 0;

    while (i <= word.length) {
      if (i === word.length) {
        currentNode.setEnd();
        break;
      }
      if (!currentNode.keys.has(word[i])) {
        currentNode.keys.set(word[i], new Node());
      }
      currentNode = currentNode.keys.get(word[i]);
      i++;
    }
  };

  this.print = function () {
    const allWords = [];
    const printNode = (node, word = "") => {
      if (node.isEnd()) {
        allWords.push(word);
      }
      node.keys.forEach((value, key) => {
        printNode(value, word + key);
      });
    };
    printNode(this.root);
    return allWords;
  };

  this.isWord = function (word) {
    let currentNode = this.root;
    let i = 0;
    while (i <= word.length) {
      if (i === word.length) {
        return currentNode.isEnd();
      } else {
        if (!currentNode.keys.has(word[i])) {
          return false;
        }
        currentNode = currentNode.keys.get(word[i]);
        i++;
      }
    }
  };
  // Only change code above this line
};
```

Cuando se agrega una palabra, el nodo asociado a la última letra posee la propiedad **end** igual a true. Para mostrar todas las palabras, se recorren todos los nodos y se van uniendo las letras hasta el nodo asociado a la última letra el cual posee la propiedad end como true. Para chequear si una palabra existe, se procede a recorrer cada nodo y si no existe la clave o si al llegar al nodo que posee la última letra, la propiedad end es false entonces la palabra no existe, en caso contrario si existe.

### 11-Binary Heap

#### 11.1-Insert an Element into a Max Heap

Un max heap es lo siguiente:

> Now we will move on to another tree data structure, the binary heap. A binary heap is a partially ordered binary tree which satisfies the heap property. The heap property specifies a relationship between parent and child nodes. You may have a max heap, in which all parent nodes are greater than or equal to their child nodes, or a min heap, in which the reverse is true. Binary heaps are also complete binary trees. This means that all levels of the tree are fully filled and if the last level is partially filled it is filled from left to right.
>
> While binary heaps may be implemented as tree structures with nodes that contain left and right references, the partial ordering according to the heap property allows us to represent the heap with an array. The parent-children relationship is what we're interested in and with simple arithmetic we can compute the children of any parent and the parent of any child node.
>
> For instance, consider this array representation of a binary min heap:
>
> [ 6, 22, 30, 37, 63, 48, 42, 76 ]
>
> The root node is the first element, 6. Its children are 22 and 30. If we look at the relationship between the array indices of these values, for index i the children are 2*i + 1 and 2 * i + 2. Similarly, the element at index 0 is the parent of these two children at indices 1 and 2. More generally, we can find the parent of a node at any index with the following: Math.floor((i - 1) / 2). These patterns will hold true as the binary tree grows to any size. Finally, we can make a slight adjustment to make this arithmetic even easier by skipping the first element in the array. Doing this creates the following relationship for any element at a given index i:
>
> Example array representation:
>
> [ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
>
> An element's left child: i \* 2
>
> An element's right child: i \* 2 + 1
>
> An element's parent: Math.floor(i / 2)
>
> Once you wrap your head around the math, using an array representation is very useful because node locations can be quickly determined with this arithmetic and memory usage is diminished because you don't need to maintain references to child nodes.

Se pide crear un **Max Heap** en base a las siguientes instrucciones:

> Instructions: Here we will create a max heap. Start by just creating an insert method which adds elements to our heap. During insertion, it is important to always maintain the heap property. For a max heap this means the root element should always have the greatest value in the tree and all parent nodes should be greater than their children. For an array implementation of a heap, this is typically accomplished in three steps:
>
> -Add the new element to the end of the array
>
> -If the element is larger than its parent, switch them.
>
> -Continue switching until the new element is either smaller than its parent or you reach the root of the tree.
>
> Finally, add a print method which returns an array of all the items that have been added to the heap.

```js
var MaxHeap = function () {
  // Only change code below this line
  this.maxheap = [];
  this.insert = function (element) {
    if (this.maxheap.length === 0) {
      this.maxheap.push(null);
      this.maxheap.push(element);
    } else {
      this.maxheap.push(element);
      let index = this.maxheap.length - 1;
      while (
        this.maxheap[index] > this.maxheap[Math.floor(index / 2)] &&
        index > 1
      ) {
        [this.maxheap[Math.floor(index / 2)], this.maxheap[index]] = [
          this.maxheap[index],
          this.maxheap[Math.floor(index / 2)],
        ];
        index = Math.floor(index / 2);
      }
    }

    return element;
  };

  this.print = function () {
    return this.maxheap.slice(1);
  };
  // Only change code above this line
};
```

#### 11.2-Remove an Element from a Max Heap

Las instrucciones de implementación del algoritmo de eliminación son las siguientes:

> Now that we can add elements to our heap let's see how we can remove elements. Removing and inserting elements both require similar logic. In a max heap you will usually want to remove the greatest value, so this involves simply extracting it from the root of our tree. This will break the heap property of our tree, so we must reestablish it in some way. Typically, for a max heap this is done in the following way:
>
> -Move the last element in the heap into the root position.
>
> -If either child of the root is greater than it, swap the root with the child of greater value.
>
> -Continue swapping until the parent is greater than both children or you reach the last level in the tree.

Las instrucciones específicas de cómo implementar el algoritmo en el problema son la siguientes:

> Instructions: Add a method to our max heap called remove. This method should return the greatest value that has been added to our max heap and remove it from the heap. It should also reorder the heap so the heap property is maintained. After removing an element, the next greatest element remaining in the heap should become the root.

```js
const MaxHeap = function () {
  this.heap = [];
  this.parent = (index) => {
    return Math.floor((index - 1) / 2);
  };
  this.insert = (element) => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  };
  this.heapifyUp = (index) => {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  };
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  };
  this.print = () => {
    return this.heap;
  };
  // Only change code below this line

  this.remove = () => {
    const maxValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let i = 0;
    while (i < this.heap.length) {
      const leftChildIndex = 2 * i + 1;
      const rightChildIndex = 2 * i + 2;

      function findMaxChildIndex(leftChildIndex, rightChildIndex) {
        if (leftChildIndex === this.heap.length - 1) {
          return leftChildIndex;
        }
        if (leftChildIndex > this.heap.length - 1) return this.heap.length;

        if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
          return leftChildIndex;
        } else {
          return rightChildIndex;
        }
      }
      findMaxChildIndex = findMaxChildIndex.bind(this);

      const maxChildIndex = findMaxChildIndex(leftChildIndex, rightChildIndex);
      if (
        maxChildIndex < this.heap.length &&
        this.heap[i] < this.heap[maxChildIndex]
      ) {
        this.swap(i, maxChildIndex);
        i = maxChildIndex;
      } else {
        break;
      }
    }

    return maxValue;
  };

  // Only change code above this line
};
```

#### 11.3-Implement Heap Sort with a Min Heap

Se implementa un algoritmo heap sort a partir de un min heap. Las instrucciones de cómo crear el algoritmo son las siguientes:

> Now that we can add and remove elements let's see some of the applications heaps can be used for. Heaps are commonly used to implement priority queues because they always store an item of greatest or least value in first position. In addition, they are used to implement a sorting algorithm called heap sort. We'll see how to do this here. Heap sort uses a min heap, the reverse of a max heap. A min heap always stores the element of least value in the root position.
>
> Heap sort works by taking an unsorted array, adding each item in the array into a min heap, and then extracting every item out of the min heap into a new array. The min heap structure ensures that the new array will contain the original items in least to greatest order. This is one of the most efficient sorting algorithms with average and worst case performance of O(nlog(n)).

Las instrucciones para implementar la clase MinHeap y sus métodos que permitan realizar el sorting son las siguientes:

> Let's implement heap sort with a min heap. Feel free to adapt your max heap code here. Create an object MinHeap with insert, remove, and sort methods. The sort method should return an array of all the elements in the min heap sorted from smallest to largest.

```js
var MinHeap = function () {
  // Only change code below this line
  this.heap = [];
  this.insert = function (value) {
    if (this.heap.length === 0) {
      this.heap.push(value);
    } else {
      this.heap.push(value);
      let index = this.heap.length - 1;
      while (
        this.heap[index] < this.heap[Math.floor((index - 1) / 2)] &&
        index > 0
      ) {
        [this.heap[Math.floor((index - 1) / 2)], this.heap[index]] = [
          this.heap[index],
          this.heap[Math.floor((index - 1) / 2)],
        ];
        index = Math.floor((index - 1) / 2);
      }
    }
  };

  this.remove = function () {
    const minValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let i = 0;

    while (i < this.heap.length) {
      let leftChildIndex = 2 * i + 1;
      let rightChildIndex = 2 * i + 2;
      let minIndex = i;

      function findMinChildIndex(leftChildIndex, rightChildIndex) {
        if (leftChildIndex === this.heap.length - 1) {
          return leftChildIndex;
        }

        if (leftChildIndex > this.heap.length - 1) {
          return this.heap.length;
        }

        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          return leftChildIndex;
        } else {
          return rightChildIndex;
        }
      }
      findMinChildIndex = findMinChildIndex.bind(this);
      const minChildIndex = findMinChildIndex(leftChildIndex, rightChildIndex);

      if (
        minChildIndex < this.heap.length &&
        this.heap[i] > this.heap[minChildIndex]
      ) {
        [this.heap[i], this.heap[minChildIndex]] = [
          this.heap[minChildIndex],
          this.heap[i],
        ];
        i = minChildIndex;
      } else {
        break;
      }
    }
  };

  this.sort = function () {
    const sorted = [];
    while (this.heap.length > 0) {
      sorted.push(this.heap[0]);
      this.remove();
    }

    return sorted;
  };
  // Only change code above this line
};
```

### 12-Graphs

#### 12.1-Adjacency List

Se define una adjacency list según lo siguiente:

> Graphs can be represented in different ways. Here we describe one way, which is called an adjacency list. An adjacency list is essentially a bulleted list where the left side is the node and the right side lists all the other nodes it's connected to. Below is a representation of an adjacency list.

> Node1: Node2, Node3
>
> Node2: Node1
>
> Node3: Node1

> Above is an undirected graph because Node1 is connected to Node2 and Node3, and that information is consistent with the connections Node2 and Node3 show. An adjacency list for a directed graph would mean each row of the list shows direction. If the above was directed, then Node2: Node1 would mean there the directed edge is pointing from Node2 towards Node1. We can represent the undirected graph above as an adjacency list by putting it within a JavaScript object.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"],
};
```

This can also be more simply represented as an array where the nodes just have numbers rather than string labels.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0], // Node2
  [0], // Node3
];
```

Se pide crear lo siguiente:

> Create a social network as an undirected graph with 4 nodes/people named James, Jill, Jenny, and Jeff. There are edges/relationships between James and Jeff, Jill and Jenny, and Jeff and Jenny.

```js
var undirectedAdjList = {
  James: ["Jeff"],
  Jill: ["Jenny"],
  Jeff: ["Jenny", "James"],
  Jenny: ["Jill", "Jeff"],
};
```

#### 12.2-Adjacency Matrix

Se pide crear lo siguiente:

> Create an adjacency matrix of an undirected graph with five nodes. This matrix should be in a multi-dimensional array. These five nodes have relationships between the first and fourth node, the first and third node, the third and fifth node, and the fourth and fifth node. All edge weights are one.

```js
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
];
```

var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  //Only change code below this line

  this.reverse = function () {
    // recorrido desde la cabeza hasta el final
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
    //recorrido desde la tail hasta la cabeza
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
  this.add = function (data) {
    if (this.head === null) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data, this.tail);
      this.tail = this.tail.next;
    }
  };
  this.print = function () {
    let node = this.head;
    while (node !== null) {
      console.log(node);
      node = node.next;
    }
  };
};
const dll = new DoublyLinkedList();
dll.add(1);
dll.add(2);
dll.add(3);
dll.add(4);
dll.add(5);
dll.reverse();
dll.print();

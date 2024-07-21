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

  // this.print = function () {
  //   let node = this.head;
  //   while (node !== null) {
  //     console.log(node.data);
  //     node = node.next;
  //   }
  // };

  // Only change code above this line
};

const dll = new DoublyLinkedList();
dll.add(1);
dll.add(2);
dll.add(3);
dll.add(2);
dll.remove(2);
dll.print();

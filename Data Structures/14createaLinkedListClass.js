function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line

    if (head === null) {
      head = new Node(element);
      length += 1;
    } else {
      let node = head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(element);
    }
    // Only change code above this line
  };
}

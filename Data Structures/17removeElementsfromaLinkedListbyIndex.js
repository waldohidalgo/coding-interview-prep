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

  // Only change code below this line
  this.removeAt = function (index) {
    if (index < 0 || index >= length) {
      return null;
    } else {
      let currentNode = head;
      let previousNode;
      let i = 0;
      length--;
      if (index === 0) {
        head = currentNode.next;
        return currentNode.element;
      } else {
        while (i < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          i++;
        }
        previousNode.next = currentNode.next;
        return currentNode.element;
      }
    }
  };
  // Only change code above this line
}
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
console.log(ll.removeAt(3));
console.log(ll.size());

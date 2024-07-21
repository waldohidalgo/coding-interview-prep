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
  // Only change code above this line

  //   this.printAll = function () {
  //     let currentNode = head;
  //     while (currentNode) {
  //       console.log(currentNode.element);
  //       currentNode = currentNode.next;
  //     }
  //   };
}
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.addAt(5, 53);
//console.log(ll.addAt(0, 3));
//console.log(ll.size());
ll.printAll();

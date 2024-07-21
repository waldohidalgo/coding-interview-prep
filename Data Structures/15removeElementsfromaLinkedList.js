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
    // Only change code below this line

    let currentNode = head;
    const nodes = [];
    if (head.element !== element) {
      nodes.push(head);
    }
    while (currentNode.next) {
      if (currentNode.next.element !== element) {
        nodes.push(currentNode.next);
      }
      currentNode = currentNode.next;
    }
    for (let i = 0; i < nodes.length; i++) {
      if (i === nodes.length - 1) {
        nodes[i].next = null;
      } else {
        nodes[i].next = nodes[i + 1];
      }
    }
    length = nodes.length;
    head = nodes[0];

    // Only change code above this line
  };

  //  forma 1
  // this.remove = function (element) {
  //     // Only change code below this line

  //     let currentNode = head;
  //     const nodes = [head];
  //     while (currentNode.next) {
  //       nodes.push(currentNode.next);
  //       currentNode = currentNode.next;
  //     }
  //     const nodosFiltrados = nodes.filter((node) => node.element !== element);
  //     for (let i = 0; i < nodosFiltrados.length; i++) {
  //       if (i === nodosFiltrados.length - 1) {
  //         nodosFiltrados[i].next = null;
  //       } else {
  //         nodosFiltrados[i].next = nodosFiltrados[i + 1];
  //       }
  //     }
  //     length = nodosFiltrados.length;
  //     head = nodosFiltrados[0];

  //     // Only change code above this line
  //   };
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(3);
ll.remove(3);
console.log(ll.size());

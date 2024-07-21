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

// const queue = new CircularQueue(2);

// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));

// console.log(queue.dequeue());
// console.log(queue.enqueue(4));
// console.log(queue.enqueue(5));
// console.log(queue.print());

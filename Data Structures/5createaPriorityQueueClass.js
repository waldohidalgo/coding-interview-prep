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

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(["common cold", 3]);
priorityQueue.enqueue(["gunshot", 1]);
priorityQueue.enqueue(["high fever", 4]);
console.log(priorityQueue.front());

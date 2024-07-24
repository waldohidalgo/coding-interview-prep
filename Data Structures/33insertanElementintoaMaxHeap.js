var MaxHeap = function () {
  // Only change code below this line
  this.maxheap = [null];
  this.insert = function (element) {
    if (this.maxheap.length === 1) {
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
    console.log(this.maxheap.slice(1));
    return this.maxheap.slice(1);
  };
  // Only change code above this line
};

const maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(45);
maxHeap.insert(48);
maxHeap.insert(35);
maxHeap.insert(37);
maxHeap.insert(42);
maxHeap.insert(38);
// maxHeap.insert(34);
// maxHeap.insert(40);
// maxHeap.insert(36);
console.log(maxHeap.print());

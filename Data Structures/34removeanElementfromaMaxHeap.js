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
const maxHeap = new MaxHeap();
// maxHeap.insert(41);
// maxHeap.insert(45);
// maxHeap.insert(48);
// maxHeap.insert(35);
// maxHeap.insert(37);
// maxHeap.insert(42);
// maxHeap.insert(38);
const arr = [90, 15, 7, 9, 12, 3, 5, 2, 7, 3, 10];
for (let i = 0; i < arr.length; i++) {
  maxHeap.insert(arr[i]);
}
console, maxHeap.remove();

console.log(maxHeap.print());

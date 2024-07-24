function isSorted(a) {
  for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i + 1]) return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5) {
  let a = new Array(size);
  for (let i = 0; i < size; i++) a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function () {
  // Only change code below this line
  this.heap = [];
  this.insert = function (value) {
    if (this.heap.length === 0) {
      this.heap.push(value);
    } else {
      this.heap.push(value);
      let index = this.heap.length - 1;
      while (
        this.heap[index] < this.heap[Math.floor((index - 1) / 2)] &&
        index > 0
      ) {
        [this.heap[Math.floor((index - 1) / 2)], this.heap[index]] = [
          this.heap[index],
          this.heap[Math.floor((index - 1) / 2)],
        ];
        index = Math.floor((index - 1) / 2);
      }
    }
  };

  this.remove = function () {
    const minValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let i = 0;

    while (i < this.heap.length) {
      let leftChildIndex = 2 * i + 1;
      let rightChildIndex = 2 * i + 2;
      let minIndex = i;

      function findMinChildIndex(leftChildIndex, rightChildIndex) {
        if (leftChildIndex === this.heap.length - 1) {
          return leftChildIndex;
        }

        if (leftChildIndex > this.heap.length - 1) {
          return this.heap.length;
        }

        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          return leftChildIndex;
        } else {
          return rightChildIndex;
        }
      }
      findMinChildIndex = findMinChildIndex.bind(this);
      const minChildIndex = findMinChildIndex(leftChildIndex, rightChildIndex);

      if (
        minChildIndex < this.heap.length &&
        this.heap[i] > this.heap[minChildIndex]
      ) {
        [this.heap[i], this.heap[minChildIndex]] = [
          this.heap[minChildIndex],
          this.heap[i],
        ];
        i = minChildIndex;
      } else {
        break;
      }
    }
  };

  this.sort = function () {
    const sorted = [];
    while (this.heap.length > 0) {
      sorted.push(this.heap[0]);
      this.remove();
    }

    return sorted;
  };

  // Only change code above this line
};

const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(17);
heap.insert(10);
heap.insert(84);
heap.insert(19);

console.log(heap.heap);
console.log(heap.sort());

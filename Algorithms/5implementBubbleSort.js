function bubbleSort(array) {
  // Only change code below this line

  if (array.length <= 1) return array;

  let isOrdered = false;
  while (!isOrdered) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        break;
      }
      if (i === array.length - 2) {
        isOrdered = true;
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(bubbleSort2([100, 99, 98, 97]));

// otra implementacion de bubble sort

function bubbleSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

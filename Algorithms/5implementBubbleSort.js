function bubbleSort(array) {
  // Only change code below this line
  let arr = array;
  let isOrdered = false;
  while (!isOrdered) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        break;
      }
      if (i === arr.length - 2) {
        isOrdered = true;
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);

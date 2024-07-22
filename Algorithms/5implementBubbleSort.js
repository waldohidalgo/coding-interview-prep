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

console.log(bubbleSort([1100, 15, -50]));

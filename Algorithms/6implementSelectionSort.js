function selectionSort(array) {
  // Only change code below this line

  for (let i = 0; i < array.length - 1; i++) {
    const subArr = array.slice(i);
    const minValue = Math.min(...subArr);
    const minIndex = subArr.indexOf(minValue) + i;
    if (minIndex === i) {
      continue;
    } else {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
  // Only change code above this line
}

console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);

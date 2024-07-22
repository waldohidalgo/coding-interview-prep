function quickSort(array) {
  // Only change code below this line
  if (array.length <= 1) {
    return array;
  }
  const last = array[array.length - 1];
  const subArr = array.slice(0, array.length - 1);
  const left = [];
  const right = [];
  for (let i = 0; i < subArr.length; i++) {
    if (subArr[i] < last) {
      left.push(subArr[i]);
    } else {
      right.push(subArr[i]);
    }
  }
  return [...quickSort(left), last, ...quickSort(right)];

  // Only change code above this line
}
console.log(quickSort([3]));

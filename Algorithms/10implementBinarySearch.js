function binarySearch(searchList, value) {
  let arrayPath = [];

  const mid = Math.floor((searchList.length - 1) / 2);

  if (searchList[mid] === value) {
    return [searchList[mid]];
  }
  if (searchList.length <= 1) {
    return [null];
  }
  const left = searchList.slice(0, mid);
  const right = searchList.slice(mid + 1);
  arrayPath.push(searchList[mid]);

  if (value < searchList[mid]) {
    arrayPath = arrayPath.concat(binarySearch(left, value));
  } else if (value > searchList[mid]) {
    arrayPath = arrayPath.concat(binarySearch(right, value));
  }

  return arrayPath.includes(value) ? arrayPath : "Value Not Found";
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];
console.log(testArray.length, testArray[11]);
console.log(binarySearch(testArray, 0));

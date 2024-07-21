function updateInventory(curInv, newInv) {
  return curInv
    .concat(newInv)
    .reduce((acc, arrItem) => {
      const [qty, item] = arrItem;
      const itemIndex = acc.findIndex((arrItem) => arrItem[1] === item);
      if (itemIndex > -1) {
        acc[itemIndex][0] += qty;
      } else {
        acc.push(arrItem);
      }

      return acc;
    }, [])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(
  updateInventory(
    [
      [0, "Bowling Ball"],
      [0, "Dirty Sock"],
      [0, "Hair Pin"],
      [0, "Microphone"],
    ],
    [
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"],
      [1, "Toothpaste"],
    ]
  )
);

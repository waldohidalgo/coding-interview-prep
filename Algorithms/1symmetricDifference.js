function sym(...args) {
  const sets = args.map((set) => new Set(set));

  const setSym = sets.reduce((set, set2) => {
    let diff = new Set();

    for (let item of set) {
      if (!set2.has(item)) {
        diff.add(item);
      }
    }
    for (let item of set2) {
      if (!set.has(item) && !diff.has(item)) {
        diff.add(item);
      }
    }

    return diff;
  });
  return [...setSym].sort((a, b) => a - b);
}

console.log(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
);

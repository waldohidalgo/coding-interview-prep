function pairwise(arr, arg) {
  const newArr = arr.map((e, i) => ({ [i]: e }));
  const pares = [];
  const indicesYaConsiderados = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (
        !indicesYaConsiderados.includes(j) &&
        !indicesYaConsiderados.includes(i)
      ) {
        if (newArr[i][i] + newArr[j][j] === arg) {
          pares.push([Object.keys(newArr[i])[0], Object.keys(newArr[j])[0]]);
          indicesYaConsiderados.push(j);
          indicesYaConsiderados.push(i);
        }
      }
    }
  }

  return pares.reduce((acc, elem) => acc + +elem[0] + +elem[1], 0);
}

//pairwise([1, 4, 2, 3, 0, 5], 7);
//pairwise([7, 9, 11, 13, 15], 20);
//pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([], 100);

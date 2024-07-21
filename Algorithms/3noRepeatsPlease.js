function permAlone(str) {
  function noRepeatPlease(str) {
    if (str.length === 1) {
      return str;
    }

    if (str.length === 2) {
      if (str[0] === str[1]) {
        return [""];
      }
      return [`${str[0]}${str[1]}`, `${str[1]}${str[0]}`];
    }
    let arrayFinal = [];

    for (let i = 0; i < str.length; i++) {
      const newStr = str.slice(0, i) + str.slice(i + 1);
      const array = noRepeatPlease(newStr);

      const newArray = [];

      for (let j = 0; j < array.length; j++) {
        if (str[i] !== array[j][0] && array[j] !== "") {
          newArray.push(str[i] + array[j]);
        }
      }

      arrayFinal = arrayFinal.concat(newArray);
    }

    return arrayFinal;
  }

  return noRepeatPlease(str).length;
}

console.log(permAlone("aaabb"));

// function noRepeatPlease(str) {
//   if (str.length === 1) {
//     return str;
//   }

//   if (str.length === 2) {
//     return [`${str[0]}${str[1]}`, `${str[1]}${str[0]}`];
//   }
//   let arrayFinal = [];

//   for (let i = 0; i < str.length; i++) {
//     const newStr = str.slice(0, i) + str.slice(i + 1);
//     const array = noRepeatPlease(newStr);
//     for (let j = 0; j < array.length; j++) {
//       array[j] = str[i] + array[j];
//     }

//     arrayFinal = arrayFinal.concat(array);
//   }

//   return arrayFinal;
// }

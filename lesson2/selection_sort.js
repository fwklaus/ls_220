let arr = [3, 8, 2, 1];
let arr2 = [5, 8, 1, 3, 999, 0];

// function selectionSort(arr) {
//   let sorted = [];
//   let unsorted = [].slice.call(arr);
//   let minIndex = 0;
//   let minNum = unsorted[minIndex];

//   while (sorted.length < arr.length) {
//     for (let i = 0; i < unsorted.length; i++) {
//       let num = unsorted[i];
//       if (num < minNum) {
//         minIndex = i;
//         minNum = num;
//       }
//     }

//     sorted.push(unsorted.splice(minIndex, 1));
//     minIndex = 0;
//     minNum = unsorted[minIndex];
//   }

//   return sorted.flat();
// }

// only performs one swap per iteration
// iterates through the array once for outer loop
// iterates through the array in an inner loop, performing one swap per iteration after the smalle index is established

function selectionSort(arr) {
  let minIndex = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}


console.log(selectionSort(arr)); // [1, 2, 3, 8]
console.log(selectionSort(arr2)); // [0, 1, 3, 5, 8, 999]

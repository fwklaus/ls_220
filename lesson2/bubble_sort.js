let arr = [1, 5, 2, 90, 12];
let arr2 = [5, 3, 8, 7, 2]

function bubbleSort(arr) {
  let swaps = true;

  while (swaps) {
    swaps = false;
    for (let i = 1; i < arr.length; i++) {
      let a = arr[i - 1];
      let b = arr[i];

      if (a > b) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swaps = true
      } 
    }
  }

  return arr;
}


console.log(bubbleSort(arr)); // [1, 2, 5, 12, 90]
console.log(bubbleSort(arr2)); // [2, 3, 5, 7, 8]

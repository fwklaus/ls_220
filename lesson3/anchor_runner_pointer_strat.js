function moveZeroesToEnd(arr) {
  let anchor = 0;
  let runner = 0;

  while (runner < arr.length) {
    if (arr[runner] !== 0) {
      [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
      anchor++;
    }
    runner++;
  }

  return arr;
}

const array = [0, 2, 0, 4, 8];
const transformedArray = moveZeroesToEnd(array);
console.log(transformedArray); // [2, 4, 8, 0, 0]
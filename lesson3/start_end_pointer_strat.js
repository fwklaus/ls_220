function findTwoSum(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const sum = array[start] + array[end];
    if (sum === target) {
      return [array[start], array[end]];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return null;
}

console.log(findTwoSum([1, 3, 6, 7, 8, 12], 14)); // [6, 8];
console.log(findTwoSum([2, 6, 8, 10], 20)); // null;
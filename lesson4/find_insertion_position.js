function findInsertPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log([3, 5, 7, 9, 11], 9); // 3
console.log([3, 5, 7, 9, 11], 2); // 0
console.log([3, 5, 7, 9, 11], 12); // 5
function maximumSum(nums, k) {
  if (nums.length < k || k < 1) {
    return null;
  }
  let left = 0;
  let right = k - 1;
  let sum = 0;

  for (let i = 0; i <= right; i++) {
    sum += nums[i];
  }

  let max = sum;

  while (right < nums.length - 1) {
    sum -= nums[left];
    left++;
    right++;
    sum += nums[right];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maximumSum([1, 2, 3, 4, 5, 6], 4)); // 18
console.log(maximumSum([1, 2, 3], 4)); // null
console.log(maximumSum([1, 2, 3], 0)); // null
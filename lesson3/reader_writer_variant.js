// variant of the anchor-runner pointer strategy
function moveZeroes(nums) {
  let writer = 0;
  let reader = 0;

  while (reader < nums.length) {
    if (nums[reader] !== 0) {
      nums[writer] = nums[reader];
      writer++;
    }
    reader++;
  }

  while (writer < nums.length) {
    nums[writer] = 0;
    writer++;
  }

  return nums;
}

const nums = [0, 2, 0, 4, 8];
console.log(moveZeroes(nums)); // Output: [2, 4, 8, 0, 0]

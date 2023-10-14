// takes an array of integers in asc order, and a target integer
// find the starting and ending positions of the target value within the array

// array of integers, target integer
// return aray containing the starting and ending positions of the target value within the array
  // return [-1, -1] if the target value is not found
  
// the array is sorted
// there may be multiple of the target value
  // if the target has one instance in the array, both index values will be the same
  // start and end refer to the index of the first and last position of the target

  // iterate over the arr
    // use start and end pointers set to 0 and -1 indices
    // find the mid value
      // if the mid value is the target
// perform two binary searches
  // locate the start and end index
  // if we cannot locate the target, return -1
    // otherwise return either the leftmost or rightmost index

function findLeftMostIndex(arr, target) {
  let left = 0
  let right = arr.length - 1
  let currLeftMost = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (array[mid] == target) {
      currLeftMost = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return currLeftMost;
}

function findRightMostIndex(arr, target) {
  let left = 0
  let right = arr.length - 1
  let currRightMost = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] == target) {
      currRightMost = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return currRightMost;
}

function findRange(arr, target) {
  let leftIndex = findLeftMostIndex(arr, target);    
  let rightIndex = findRightMostIndex(arr, target);
  return [leftIndex, rightIndex];
}

findRange([1, 2, 3, 3, 3, 3, 3, 4, 5], 3); // [2, 6]
findRange([1, 2, 3, 3, 3, 5, 6], 4); // [-1, -1]

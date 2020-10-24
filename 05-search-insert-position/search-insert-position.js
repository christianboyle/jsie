// Search Insert Position (LeetCode #35)
//
// Given a sorted array and a target value,
// return the index if the target is found.
//
// If not, return the index where it WOULD BE
// if it were inserted in the order.
//
// You may assume no duplicates in the array.

var searchInsert = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    let midVal = nums[mid];
    if (target === midVal) {
      return mid;
    } else if (target > midVal) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return lo;
};

console.log(searchInsert([1, 20, 25, 30], 25)); // 2
console.log(searchInsert([1, 20, 25, 30], 2)); // 1

// O(log n) - logarithmic time
// O(1) - constant space

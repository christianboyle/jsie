// Three Sum (LeetCode #15)
//
// Given an array nums of n integers,
//
// are there elements a, b, c in nums such that a + b + c = 0?
//
// Find all unique triplets in the array which give the sum of zero.

var threeSum = function (nums) {
  const output = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        output.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[right - 1] === nums[right]) {
          right--;
        }
        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        right--;
        left++;
      } else if (total > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]

// O(n^2) - quadratic time
// O(1) - constant space

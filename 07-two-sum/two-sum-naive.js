// Two Sum (LeetCode #1)
//
// Given an array of numbers and a target,
//
// return the indicides of the numbers that add up
// to the target

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === want) return [i, j];
    }
  }
};

console.log(twoSum([2, 3, 5, 4], 6)); // [0,3]

// O(n^2) - quadratic time
// O(1) - constant space

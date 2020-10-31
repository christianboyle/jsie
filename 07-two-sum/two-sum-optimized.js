// Two Sum (LeetCode #1)
//
// Given an array of numbers and a target,
//
// return the indicides of the numbers that add up
// to the target

var twoSum = function (nums, target) {
  const ht = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    if (want in ht) {
      const leftIndex = ht[want];
      return [leftIndex, i];
    } else {
      ht[num] = i;
    }
  }
};

console.log(twoSum([2, 3, 5, 4], 6)); // [0,3]

// O(n) - linear time
// O(n) - linear space

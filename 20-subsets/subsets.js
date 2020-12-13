// Subsets (LeetCode #78)
//
// Given an integer array nums, return all possible subsets (the power set).
//
// The solution set must not contain duplicate subsets.

var subsets = function(nums) {
  const queue = [[]];
  for (let num of nums) {
    for (let cur of [...queue]) {
      queue.push([...cur, num]);
    }
  }
  return queue
};

let nums = [1,2,3]

// let nums = [0]

console.log(subsets(nums)); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// O(n * 2^n) exponential+ time complexity
// O(2^n) exponential space complexity

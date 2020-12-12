// Longest Common Subsequence (LeetCode #1143)
// Given two strings text1 and text2, return the length
// of their longest common subsequence.
//
// A subsequence of a string is a new string generated
// from the original string with some characters(can be none)
// deleted without changing the relative order of the remaining
// characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not).
// A common subsequence of two strings is a subsequence that is common
// to both strings.
//
// If there is no common subsequence, return 0.

var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  for (let i = 0; i < text1.length + 1; i++) {
    dp.push(Array(text2.length + 1).fill(0));
  }
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[text1.length][text2.length];
};

let text1 = 'abcde';
let text2 = 'ace';

console.log(longestCommonSubsequence(text1, text2)); // 3

// O(m * n) time complexity
// O(m * n) space complexity

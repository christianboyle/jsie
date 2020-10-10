// Find First Unique Character (LeetCode #387)
//
// Given a string, find the first non-repeating character in it 
// and return it's index.
//
// If it doesn't exist, return -1

var firstUniqChar = function (s) {
  const hashTable = {};

  for (let char of s) {
    if (hashTable[char]) hashTable[char]++;
    else hashTable[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashTable[char] == 1) return i;
  }

  return -1;
};

console.log(firstUniqChar('aabbccddeef')); // 10

// O(n^2) - quadratic time
// O(1) - constant space

// Find First Unique Character (LeetCode #387)
//
// Given a string, find the first non-repeating character in it 
// and return it's index.
//
// If it doesn't exist, return -1

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar('aabbccddeef')); // 10

// O(n^2) - quadratic time
// O(1) - constant space


// Group Anagrams (LeetCode #49)
//
// Given an array, return the strings
// grouped by anagram.

var groupAnagrams = function (strs) {
  const ht = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (ht[sorted]) ht[sorted].push(str);
    else ht[sorted] = [str];
  }
  return Object.values(ht);
};

console.log(groupAnagrams(['ab', 'ba', 'bb', 'bba']));

// O(n * (m log m))
// O(n) - linear space

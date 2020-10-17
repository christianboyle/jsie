// Valid Palindrome (LeetCode #125)
//
// Given a string,
// determine whether it is a palindrome.

var validPalindrome = function (s) {
  s = s.replace(/[^\w]/gi, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(validPalindrome('racecar'));
console.log(validPalindrome('racecars'));

// O(n) - linear time
// O(1) - constant space

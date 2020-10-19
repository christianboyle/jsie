// Valid Parentheses (LeetCode #20)
//
// Given a string that contains just the characters '(' ')'
// '{' '}' '[' and ']' determine if the input string is valid
//
// An input string is valid if:
//
// 1. Open brackets must be closed by the same type of bracket
// 2. Open brackets must be closed in the correct order
// 
// Note that an empty string is also considered valid

var isValid = function (s) {
  const stack = [];
  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (last === '(' && char !== ')') {
        return false;
      } else if (last === '[' && char !== ']') {
        return false;
      } else if (last === '{' && char !== '}') {
        return false;
      }
    }
  }
  if (stack.length){
    return false;
  } else {
    return true;
  }
};

console.log(isValid('[{}]')); // true 
console.log(isValid('[{)]')); // false

// O(n) - linear time
// O(n) - linear space

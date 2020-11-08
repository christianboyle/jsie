// Reverse Linked List (LeetCode #206)
//
// Reverse a Singly Linked List
//
// A linked list could be reversed either
// iteratively or recursively.
//
// Could you implement both?

var reverseList = function (head) {
  let prev = null;
  let on = head;
  while (on !== null) {
    let temp = on.next;
    on.next = prev;
    prev = on;
    on = temp;
  }
  return prev;
};

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: null } } }

console.log(reverseList(list)); // { value: 3, next: { value: 2, next: { value: 1, next: null } } }

// O(n) - linear time
// O(1) - constant space

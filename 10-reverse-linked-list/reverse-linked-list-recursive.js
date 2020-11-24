// Reverse Linked List (LeetCode #206)
//
// Reverse a Singly Linked List
//
// A linked list could be reversed either
// iteratively or recursively.
//
// Could you implement both?

var reverseListR = function (on, prev = null) {
  if (on === null) return prev;
  let temp = on.next;
  on.next = prev;
  return reverseListR(temp, on);
};

// create list nodes

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

// assign head

let head = node1;

// connect linked list

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

console.log(head); // ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: [Object] } } }

console.log(reverseListR(head)); // ListNode { val: 5, next: ListNode { val: 4, next: ListNode { val: 3, next: [Object] } } }

// O(n) - linear time
// O(1) - constant space

// Remove Nth Node From End of List (LeetCode #19)
//
// Given a linked list, remove the nth node from the end of the list
//
// And return its head

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  // 1. measure length
  let on = head;
  let length = 1;
  while (on) {
    length++;
    on = on.next;
  }
  let leftIndex = length - n - 1;
  // 1.5 (edge case) delete head
  if (leftIndex === 0) {
    return head.next;
  }
  // 2. point around to delete node
  on = head;
  while (leftIndex-- > 1) {
    on = on.next;
  }
  on.next = on.next.next;
  return head;
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

console.log({ head }); // { head: ListNode { val: 1, next: ListNode { val: 2, next: [Object] } } }

removeNthFromEnd(head, (n = 4));

console.log({ head }); // { head: ListNode { val: 1, next: ListNode { val: 3, next: [Object] } } }

// O(n) - linear time
// O(1) - constant space

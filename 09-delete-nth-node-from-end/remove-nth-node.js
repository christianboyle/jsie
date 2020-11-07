// Remove Nth Node From End of List (LeetCode #19)
//
// Given a linked list, remove the nth node from the end of the list
//
// And return its head

function ListNode(val) {
  this.val = val;
  this.next = null;
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

// O(n) - linear time
// O(1) - constant space

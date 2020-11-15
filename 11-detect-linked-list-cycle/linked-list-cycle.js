// Linked List Cycle (LeetCode #141)
//
// Given a linked list,
//
// determine if it has a cycle in it

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var hasCycle = function (head) {
  const nodes = new Set();
  let on = head;
  while (on) {
    if (nodes.has(on)) return true;
    nodes.add(on);
    on = on.next;
  }
  return false;
};

// create list nodes

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

// assign head

let head = node1;

// connect linked list

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1; // cycle

console.log(hasCycle(node1)); // true, but false when removing cycle with node4.next = null;

// O(n) - linear time
// O(n) - linear space

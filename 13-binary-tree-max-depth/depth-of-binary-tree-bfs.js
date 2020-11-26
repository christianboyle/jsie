// Maximum Depth of Binary Tree (LeetCode #104)
//
// Given a binary tree, find its maximum depth
//
// The maximum depth is the number of nodes along the longest
// path from the ROOT node down to the furthest LEAF node
//
// Note: a LEAF is a node with no children

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length) {
    let size = queue.length;
    depth++;
    while (size--) {
      let item = queue.shift();
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
  }
  return depth;
};

const val = [3, 9, 20, null, null, 15, 7];

const t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

console.log(maxDepth(t));

// O(n) - linear time
// O(k) - linear space (where k is the level with the most nodes)

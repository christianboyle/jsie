// Level Order Traversal (LeetCode #102)
//
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const levels = [];
  while (queue.length) {
    let size = queue.length;
    const currentLevel = [];
    while (size--) {
      const item = queue.shift();
      currentLevel.push(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    levels.push(currentLevel);
  }
  return levels;
};

const val = [3, 9, 20, null, null, 15, 7];

const t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

console.log(levelOrder(t)); // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

// O(n) - linear time
// O(n) - linear space

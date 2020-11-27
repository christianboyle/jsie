// Validate Binary Search Tree (LeetCode #98)
//
// Given a binary tree, determine if it is a valid binary search tree (BST).

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  if (!root) return true;
  return validate(root, null, null);
};

function validate(node, min, max) {
  if (min !== null && node.val <= min) return false;
  if (max !== null && node.val >= max) return false;

  // everything from the left should be less than current node,
  // we do not check min here
  if (node.left && !validate(node.left, min, node.val)) return false;
  // everything from the right should be greater than current node,
  // we do not check max here
  if (node.right && !validate(node.right, node.val, max)) return false;

  return true;
}

// const root = [2, 4, 3];
// const t = new TreeNode(2);
// t.left = new TreeNode(4);
// t.right = new TreeNode(3);
//
// false

const root = [3, 1, 4];
const t = new TreeNode(3);
t.left = new TreeNode(1);
t.right = new TreeNode(4);
//
// true

console.log(isValidBST(t));

// n (nodes) + k (null children) = O(n) - linear time
// 3k (where k is height of tree) = O(k) - linear space (where k is the height of the tree)

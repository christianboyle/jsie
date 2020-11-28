// Balanced Binary Tree (LeetCode #110)
//
// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as:
//
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const ckeckHeight = (root) => {
  if (root === null) return 0;
  const left = ckeckHeight(root.left);
  const right = ckeckHeight(root.right);
  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }
  // height of a node
  return Math.max(left, right) + 1;
};
const isBalanced = (root) => {
  if (root === null) return true;
  return ckeckHeight(root) !== false;
};

const root = [3, 9, 20, null, null, 15, 7];
const t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);
//
// true

// const root = [1, 2, 2, 3, 3, null, null, 4, 4];
// const t = new TreeNode(1);
// t.left = new TreeNode(2);
// t.right = new TreeNode(2);
// t.left.left = new TreeNode(3);
// t.left.right = new TreeNode(3);
// t.left.left.left = new TreeNode(4);
// t.left.left.right = new TreeNode(4);
//
// false

// const root = [];
// const t = new TreeNode();
//
// true

console.log(isBalanced(t));

// O(n^2) - quadratic time
// O(n) - linear space

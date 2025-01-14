/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes1 = function (root) {
  function dfs(node) {
    if (!node) return 0;

    return 1 + dfs(node.left) + dfs(node.right);
  }

  return dfs(root);
};

var countNodes = function (root) {
  if (root === null) return 0;

  let leftNode = root.left;
  let leftCount = 0;
  while (leftNode) {
    leftCount++;
    leftNode = leftNode.left;
  }

  let rightNode = root.right;
  let rightCount = 0;
  while (rightNode) {
    rightCount++;
    rightNode = rightNode.right;
  }

  let count = 0;
  if (leftCount === rightCount) {
    count = Math.pow(2, leftCount + 1) - 1;
  } else {
    leftCount = countNodes(root.left);
    rightCount = countNodes(root.left);
    count = 1 + leftCount + rightCount;
  }

  return count;
};

import TreeNode from "../common/TreeNode.js";

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(countNodes(root));
console.log(countNodes2(root));

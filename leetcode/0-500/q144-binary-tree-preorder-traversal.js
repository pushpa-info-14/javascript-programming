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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [];
  function dfs(node) {
    if (!node) return;

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result;
};

import TreeNode from "../common/TreeNode.js";

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(preorderTraversal(root));

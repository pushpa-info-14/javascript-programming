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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;

  let left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};

import TreeNode from "../common/TreeNode.js";

let root = new TreeNode(4, new TreeNode(2), new TreeNode(7));

console.log(invertTree(root));

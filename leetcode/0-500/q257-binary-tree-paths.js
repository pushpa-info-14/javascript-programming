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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];

  function dfs(node, path) {
    if (node.left === null && node.right === null) {
      path = path.length === 0 ? node.val + "" : path + "->" + node.val;
      result.push(path);
      return;
    }

    if (path.length === 0) {
      path = node.val + "";
    } else {
      path += "->" + node.val;
    }

    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);
  }

  dfs(root, "");
  return result;
};

import TreeNode from "../common/TreeNode.js";

let root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3)
);

console.log(binaryTreePaths(root));

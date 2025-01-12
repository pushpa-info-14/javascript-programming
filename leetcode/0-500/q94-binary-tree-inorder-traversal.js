/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return result;
};

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(inorderTraversal(root));

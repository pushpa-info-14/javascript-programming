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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function dfs(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null) return false;
    if (node2 === null) return false;

    if (node1.val !== node2.val) return false;

    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
  }

  return dfs(root.left, root.right);
};

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(root));

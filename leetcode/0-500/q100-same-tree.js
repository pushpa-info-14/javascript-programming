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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function dfs(node1, node2) {
    if (node1 === null && node2 === null) return true;

    if (node1 === null) return false;
    if (node2 === null) return false;
    if (node1.val !== node2.val) return false;

    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
  }

  return dfs(p, q);
};

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(isSameTree(root, root));

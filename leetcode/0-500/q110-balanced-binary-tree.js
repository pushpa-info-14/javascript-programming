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
var isBalanced = function (root) {
  let valid = true;

  function dfs(node) {
    if (node === null) return 0;

    let l = dfs(node.left);
    let r = dfs(node.right);
    if (Math.abs(l - r) > 1) {
      valid = false;
    }
    return 1 + Math.max(l, r);
  }

  dfs(root);
  return valid;
};

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

let root2 = new TreeNode(1, new TreeNode(2));

console.log(isBalanced(root));
console.log(isBalanced(root2));

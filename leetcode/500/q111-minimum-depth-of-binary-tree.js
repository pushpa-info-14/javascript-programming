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
 * @return {number}
 */
var minDepth = function (root) {
  function dfs(node) {
    if (node === null) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);
    if (left > 0 && right > 0) {
      return 1 + Math.min(left, right);
    } else {
      return 1 + Math.max(left, right);
    }
  }

  return dfs(root);
};

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

let root2 = new TreeNode(
  2,
  null,
  new TreeNode(
    3,
    null,
    new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
  )
);

console.log(minDepth(root));
console.log(minDepth(root2));

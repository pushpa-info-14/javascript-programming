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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  function dfs(node, pathSum) {
    pathSum += node.val;

    if (node && !node.left && !node.right) {
      return pathSum === targetSum ? true : false;
    }

    let left = false;
    let right = false;

    if (node.left) left = dfs(node.left, pathSum);
    if (node.right) right = dfs(node.right, pathSum);

    return left || right;
  }

  return dfs(root, 0);
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

let root3 = new TreeNode(1, new TreeNode(2));

console.log(hasPathSum(root, 30));
console.log(hasPathSum(root, 38));
console.log(hasPathSum(root, 12));
console.log(hasPathSum(root2, 20));
console.log(hasPathSum(root3, 1));

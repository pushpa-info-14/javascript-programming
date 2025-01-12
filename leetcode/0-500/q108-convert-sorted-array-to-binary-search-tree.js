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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function bfs(l, r) {
    if (l > r) return null;
    let mid = l + Math.floor((r - l) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = bfs(l, mid - 1);
    root.right = bfs(mid + 1, r);
    return root;
  }

  return bfs(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

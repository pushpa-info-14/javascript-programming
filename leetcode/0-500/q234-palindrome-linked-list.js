/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const nums = [];
  let current = head;
  while (current) {
    nums.push(current.val);
    current = current.next;
  }

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] !== nums[r]) return false;

    l++;
    r--;
  }

  return true;
};

import ListNode from "../common/ListNode.js";

let head = new ListNode(1, new ListNode(2, new ListNode(1)));

console.log(isPalindrome(head));

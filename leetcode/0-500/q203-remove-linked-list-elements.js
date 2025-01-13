/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let result = new ListNode(0, head);
  let current = result;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
};

import ListNode from "../common/ListNode.js";
let head = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))));
let head2 = new ListNode(
  1,
  new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(6))))
);

console.log(removeElements(head, 7));
console.log(removeElements(head2, 6));

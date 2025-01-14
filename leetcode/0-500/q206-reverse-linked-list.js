/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;

    current = next;
  }

  return prev;
};

var reverseList2 = function (head) {
  if (!head) {
    return null;
  }

  let newHead = head;
  if (head.next) {
    newHead = reverseList2(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
};

import ListNode from "../common/ListNode.js";

let head = new ListNode(1, new ListNode(5, new ListNode(9)));
let head2 = new ListNode(1, new ListNode(5, new ListNode(9)));

console.log(reverseList(head));
console.log(reverseList2(head2));

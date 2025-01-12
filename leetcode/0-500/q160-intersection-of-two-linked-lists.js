/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();

  let currentA = headA;
  while (currentA) {
    map.set(currentA, true);
    currentA = currentA.next;
  }

  let currentB = headB;
  while (currentB) {
    if (map.has(currentB)) {
      return currentB;
    }
    currentB = currentB.next;
  }

  return null;
};

import ListNode from "../common/ListNode.js";

let node1 = new ListNode(4);
let node2 = new ListNode(1);
let node3 = new ListNode(8);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(5);
let node7 = new ListNode(6);
let node8 = new ListNode(1);

let headA = node1;
let headB = node6;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node6.next = node7;
node7.next = node8;
node8.next = node3;

console.log(getIntersectionNode(headA, headB));

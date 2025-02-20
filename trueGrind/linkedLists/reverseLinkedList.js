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
  let newList = null;

  while (head) {
    let nextNode = head.next;
    head.next = newList;
    newList = head;
    head = nextNode;
  }

  return newList;
};

let list = new ListNode();

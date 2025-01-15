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
// var middleNode = function(head) { // two pointer solution
//     let counter = 1
//     let pointer = head
//     while (pointer.next){
//         counter++
//         pointer = pointer.next
//     }
//     let c2 = 0

//     while(c2 < Math.floor((counter)/2)){
//         c2++
//         head = head.next
//     }
//     return head
// };

var middleNode = function (head) {
  // two pointer solution (one slow, one fast)
  let ahead = head;
  while (ahead && ahead.next) {
    ahead = ahead.next.next;
    head = head.next;
  }
  return head;
};

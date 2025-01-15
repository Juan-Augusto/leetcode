class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(l1, l2) {
  let head = new ListNode();
  let tail = head;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 || l2;
  return head.next;
}

function mergeSort(head) {
  if (!head || !head.next) return head;

  let middle = findMiddle(head);
  let right = middle.next;
  middle.next = null;

  return merge(mergeSort(head), mergeSort(right));
}

function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  return result;
}

let testArray = [3, 2, 1, 5, 6];
let testList = arrayToList(testArray);

let sortedList = mergeSort(testList);
console.log(listToArray(sortedList));

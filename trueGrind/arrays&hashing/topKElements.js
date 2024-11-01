/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// JS doesn't have a built in max heap DS
// O(nlogn)
var topKFrequentHashMap = function (nums, k) {
  let hm = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    hm.set(nums[i], (hm.get(nums[i]) || 0) + 1);
  }

  return [...hm.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
};
// Using bucket sort
// O(n)
// var topKFrequent = function (nums, k) {
//   let count = {};
//   let freq = Array(nums.length + 1)
//     .fill()
//     .map(() => []);

//   for (let n of nums) {
//     count[n] = 1 + (count[n] || 0);
//   }

//   for (let [n, c] of Object.entries(count)) {
//     freq[c].push(Number(n));
//   }

//   let res = [];
//   for (let i = freq.length - 1; i > 0; i--) {
//     for (let n of freq[i]) {
//       res.push(n);
//       if (res.length === k) return res;
//     }
//   }
// };

//Using HeapMax
// O(klogn)
// var topKFrequentHeapMax = function (nums, k) {
//   if (k == nums.length) {
//     return nums;
//   }
//   // find the frequency of each number
//   let numFrequencyMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (numFrequencyMap.has(nums[i])) {
//       numFrequencyMap.set(nums[i], numFrequencyMap.get(nums[i]) + 1);
//     } else {
//       numFrequencyMap.set(nums[i], 1);
//     }
//   }

//   let topKElements = new MinHeap();

//   // go through all numbers of the numFrequencyMap and
//   // push them in the topKElements, which will have top
//   // k frequent numbers. If the heap size is more than
//   // k, we remove the smallest(top) number
//   for (let [num, frequency] of numFrequencyMap) {
//     topKElements.push([frequency, num]);
//     if (topKElements.size() > k) {
//       topKElements.pop();
//     }
//   }

//   // create a list of top k numbers
//   let topNumbers = [];

//   while (topKElements.size() > 0) {
//     topNumbers.push(topKElements.pop()[1]);
//   }

//   return topNumbers;
// };

// class MinHeap {
//   constructor(data = new Array()) {
//     this.data = data;
//     this.compareVal = (a, b) => a - b;
//     this.heapify();
//   }

//   heapify() {
//     if (this.size() < 2) {
//       return;
//     }
//     for (let i = 1; i < this.size(); i++) {
//       this.percolateUp(i);
//     }
//   }

//   peek() {
//     if (this.size() === 0) {
//       return null;
//     }
//     return this.data[0];
//   }

//   push(value) {
//     this.data.push(value);
//     this.percolateUp(this.size() - 1);
//   }

//   pop() {
//     if (this.size() === 0) {
//       return null;
//     }
//     const result = this.data[0];
//     const last = this.data.pop();
//     if (this.size() !== 0) {
//       this.data[0] = last;
//       this.percolateDown(0);
//     }
//     return result;
//   }

//   percolateUp(index) {
//     while (index > 0) {
//       const parentIndex = (index - 1) >> 1;
//       if (this.compareVal(this.data[index][0], this.data[parentIndex][0]) < 0) {
//         this.swap(index, parentIndex);
//         index = parentIndex;
//       } else {
//         break;
//       }
//     }
//   }

//   percolateDown(index) {
//     const lastIndex = this.size() - 1;
//     while (true) {
//       const leftIndex = index * 2 + 1;
//       const rightIndex = index * 2 + 2;
//       let findIndex = index;

//       if (
//         leftIndex <= lastIndex &&
//         this.compareVal(this.data[leftIndex][0], this.data[findIndex][0]) < 0
//       ) {
//         findIndex = leftIndex;
//       }

//       if (
//         rightIndex <= lastIndex &&
//         this.compareVal(this.data[rightIndex][0], this.data[findIndex][0]) < 0
//       ) {
//         findIndex = rightIndex;
//       }

//       if (index !== findIndex) {
//         this.swap(index, findIndex);
//         index = findIndex;
//       } else {
//         break;
//       }
//     }
//   }

//   swap(index1, index2) {
//     [this.data[index1], this.data[index2]] = [
//       this.data[index2],
//       this.data[index1],
//     ];
//   }

//   size() {
//     return this.data.length;
//   }
// }

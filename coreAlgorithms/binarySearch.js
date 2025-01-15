function binarySearch(nums, n, lo = 0, hi = nums.length) {
  let steps = 0;

  while (lo < hi) {
    steps++;
    let mid = Math.floor((lo + hi) / 2);

    if (nums[mid] === n) {
      console.log(`Found ${n} in ${steps} steps`);
      console.log(`Index: ${mid}`);
      return mid;
    } else if (nums[mid] < n) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
}

let n = 2;
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let b = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];
let c = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44,
];

binarySearch(c, n);

module.exports = binarySearch;

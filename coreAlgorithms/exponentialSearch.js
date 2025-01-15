const binarySearch = require("./binarySearch");

function exponentialSearch(nums, n) {
  if (nums[0] === n) {
    return 0;
  }

  let i = 1;

  while (i < nums.length && nums[i] < n) {
    i *= 2;
  }

  if (nums[i] === n) {
    return i;
  }
  let res = binarySearch(nums, n, i / 2, Math.min(i, nums.length));
  console.log("result: ", res);
  return binarySearch(nums, n, i / 2, Math.min(i, nums.length));
}

let tst = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44,
];
let target = 14;
exponentialSearch(tst, target);

/**
 * @param {number[]} nums
 * @return {number}
 */

// Using hashset
var missingNumber = function (nums) {
  let hs = new Set(nums);
  let hs2 = new Set();
  for (let n of nums) {
    if (n - 1 >= 0) hs2.add(n - 1);
  }
  for (let n of hs2) {
    if (!hs.has(n)) return n;
  }
  return nums.length;
};

// Using arithmetic progression

var missingNumber = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2; // PA total sum
  let total = 0;

  for (let n of nums) {
    total += n;
  }

  if (expectedSum === total) return 0;
  return expectedSum - total;
};

// XOR operator

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let dp = 0;

  for (const num of nums) {
      dp ^= num; // XOR operator
  }

  return dp
};


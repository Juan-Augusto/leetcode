/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let hs = new Set(nums);
  let longest = 0;

  for (let num of hs) {
    if (!hs.has(num - 1)) {
      // Start of a sequence
      let length = 1;
      while (hs.has(num + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
};

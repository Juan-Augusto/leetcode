/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    if (numbers[r] + numbers[l] === target) return [l + 1, r + 1];
    if (numbers[r] + numbers[l] < target) l++;
    else r--;
  }
};

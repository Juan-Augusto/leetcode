/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let prefix = 1;
  let postfix = 1;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(prefix);
    prefix *= nums[i];
  }
  // ------------------------------------------------------------------------------>
  // res = [prefix, nums[1] * prefix, nums[2] * (prefix), ..., nums[n-1] * (prefix)]
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * postfix;
    postfix *= nums[i];
  }
  // <-----------------------------------------------------------------------------------------
  // res = [res[1] * postfix, ..., res[n-3] * postfix,  res[n-2] * postfix, res[n-1] * postfix]
  return res;
};

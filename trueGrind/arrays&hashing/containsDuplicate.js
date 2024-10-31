var containsDuplicate = function (nums) {
  let hashSet = new Set();

  for (let i = 0; nums.length > i; i++) {
    if (hashSet.has(nums[i])) return true;
    hashSet.add(nums[i]);
  }
  return false;
};

const checkTests = () => {
  let tst1 = containsDuplicate([1, 2, 3, 1]); // true
  let tst2 = containsDuplicate([1, 2, 3, 4]); // false
  let tst3 = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true

  if (tst1 === true) console.log("Case 1: passed");
  if (tst2 === false) console.log("Case 2: passed");
  if (tst3 === true) console.log("Case 3: passed");
};

checkTests();

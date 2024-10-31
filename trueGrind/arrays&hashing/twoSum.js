var twoSum = function (nums, target) {
  let prevMap = {}; // val: index

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let diff = target - n;

    if (diff in prevMap) {
      return [prevMap[diff], i];
    }

    prevMap[n] = i;
  }

  console.log(prevMap);
};

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const checkTests = () => {
  let tst1 = twoSum([2, 7, 11, 15], 9);
  let tst2 = twoSum([3, 2, 4], 6);
  let tst3 = twoSum([3, 3], 6);
  let tst4 = twoSum([0, 3, -3, 4, -1], -1);
  let tst5 = twoSum([-18, 12, 3, 0], -6);

  console.log("Case 1:", arraysEqual(tst1, [0, 1]) ? "passed" : "failed", tst1);
  console.log("Case 2:", arraysEqual(tst2, [1, 2]) ? "passed" : "failed", tst2);
  console.log("Case 3:", arraysEqual(tst3, [0, 1]) ? "passed" : "failed", tst3);
  console.log("Case 4:", arraysEqual(tst4, [0, 4]) ? "passed" : "failed", tst4);
  console.log("Case 5:", arraysEqual(tst5, [0, 1]) ? "passed" : "failed", tst5);
};

checkTests();

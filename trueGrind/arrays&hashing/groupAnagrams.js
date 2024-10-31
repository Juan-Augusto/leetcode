var groupAnagrams = function (strs) {
  let hm = {};

  for (let i = 0; i < strs.length; i++) {
    let count = Array(26).fill(0); // a...z
    console.log(strs[i].length);
    for (let j = 0; j < strs[i].length; j++) {
      count[strs[i][j].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let key = JSON.stringify(count);

    if (!hm[key]) {
      hm[key] = [];
    }

    hm[key].push(strs[i]);
  }
  console.log(hm);
  return Object.values(hm);
};

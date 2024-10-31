var isAnagram = function (s, t) {
  if (t.length !== s.length) return false; //O(1)

  let hashS = new Map();
  let hashT = new Map();

  for (let i = 0; s.length > i; i++) {
    // O(n)
    hashS.set(s[i], (hashS.get(s[i]) || 0) + 1);
    hashT.set(t[i], (hashT.get(t[i]) || 0) + 1);
  }

  for (const j of hashS.keys()) {
    if (hashS.get(j) != hashT.get(j)) return false;
  }

  return true;
};

const checkTests = () => {
  let tst1 = isAnagram("anagram", "nagaram"); // true
  let tst2 = isAnagram("rat", "car"); // false
  let tst3 = isAnagram("aacc", "ccac"); // false

  if (tst1 === true) console.log("Case 1: passed");
  if (tst2 === false) console.log("Case 2: passed");
  if (tst3 === false) console.log("Case 3: passed");
};

checkTests();

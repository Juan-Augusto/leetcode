/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const clean = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  };

  let fs = clean(s);

  for (let i = 0; i < fs.length / 2; i++) {
    if (fs[i] !== fs[fs.length - 1 - i]) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let hm = new Map();
  hm.set(")", "(");
  hm.set("]", "[");
  hm.set("}", "{");

  for (let c of s) {
    if (hm.get(c)) {
      if (stack.length > 0 && stack[stack.length - 1] === hm.get(c)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  if (stack.length === 0) return true;
  else return false;
};

// ([]) | ([)]

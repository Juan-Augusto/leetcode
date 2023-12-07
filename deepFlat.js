/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  if (n === 0) return arr;
  const stack = [...arr.map((item) => [item, n])];
  let temp = [];
  while (stack.length > 0) {
    const [item, n] = stack.pop();
    if (Array.isArray(item) && n > 0)
      stack.push(...item.map((subItem) => [subItem, n - 1]));
    else temp.push(item);
  }
  return temp.reverse();
};

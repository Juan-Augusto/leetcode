/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let output = [];
  return function () {
    output.push(n++);
    return output.shift();
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

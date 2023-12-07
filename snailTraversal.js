/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  let snailed = [];
  if (rowsCount * colsCount !== this.length) return [];

  let firstElements = [];
  this.map((cur, index) => {
    if (index < rowsCount) {
      firstElements.push({ value: [cur], index: index + 1 });
    }
  });

  for (let j = 0; j < firstElements.length; j++) {
    for (let i = 0; i < this.length; i++) {
      if (firstElements[j].value.length < colsCount) {
        firstElements[j].value.push(
          this[this.length / 2 - firstElements[j].index]
        );
        firstElements[j].value.push(
          this[this.length / 2 + (firstElements[j].index - 1)]
        );
        firstElements[j].value.push(this[this.length - firstElements[j].index]);
      }
    }
  }

  firstElements.map((i) => {
    snailed.push(i.value);
  });

  return snailed;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

/**
* const arr = [1,2,3,4];
* arr.snail(2,2); // 
  [[1, 4
    2, 3
  ]]
*/

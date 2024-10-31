/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let hsRows = Array.from({ length: 9 }, () => new Set());
  let hsCols = Array.from({ length: 9 }, () => new Set());
  let subBoxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      let num = board[r][c];
      let subBoxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        hsRows[r].has(num) ||
        hsCols[c].has(num) ||
        subBoxes[subBoxIndex].has(num)
      )
        return false;

      hsRows[r].add(num);
      hsCols[c].add(num);
      subBoxes[subBoxIndex].add(num);
    }
  }

  console.log(hsRows, hsCols, subBoxes);
  return true;
};

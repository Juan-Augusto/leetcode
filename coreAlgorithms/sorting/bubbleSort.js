function bubbleSort(arr) {
  let n = arr.length;

  for (let i in arr) {
    console.log(arr);
    let isSorted = true;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSorted) break;
  }
  return arr;
}

// bubbleSort([5, 3, 8, 4, 2]);
bubbleSort([1, 2, 5, 4, 3]);

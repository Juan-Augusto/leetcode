function quickSort(arr, left, right) {
  if (left < right) {
    console.log(arr[left], arr[right]);
    let pi = partition(arr, left, right);
    quickSort(arr, left, pi - 1);
    quickSort(arr, pi + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;

  return i + 1;
}

let test = [3, 2, 1, 5, 6, 4];

quickSort(test, 0, test.length - 1);

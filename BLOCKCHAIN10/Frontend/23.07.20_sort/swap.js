function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

swap([2, 2, 3, 1], 1, 2);

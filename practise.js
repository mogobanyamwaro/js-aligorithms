function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];
  a.forEach((value, i) => {
    if (value === -1) {
      arr1.push(i);
    } else {
      arr2.push(value);
    }
  });
  const sortedArr = arr2.sort((a, b) => a - b);
  sortedArr.forEach((value, i) => {
    sortedArr.splice(arr1[i], 0, -1);
  });
  return sortedArr;
}

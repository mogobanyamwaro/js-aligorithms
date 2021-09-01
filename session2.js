// ADD ALL NUMBERS

function addAll() {
  var args = Array.from(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// console.log(addAll(2, 3, 4, 5, 6));

// SUM OF ALL PRIME NUMBERS

function sumAllPrimes(num) {
  let total = 0;
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// console.log(sumAllPrimes(3));

// SEEK AND DESTROY

function seekAndDestroy(arr, ...rest) {
  return arr.filter((value) => !rest.includes(value));
}

// console.log(seekAndDestroy([1, 2, 4, 5], 4, 8, 1, 2));

// SORT BY HEIGHT

function sortByHeight(a) {
  const positionArryTree = [];
  const valuePersionHeight = [];

  a.forEach((value, i) => {
    if (value === -1) {
      positionArryTree.push(i);
    } else {
      valuePersionHeight.push(value);
    }
  });

  const sortedArr = valuePersionHeight.sort((a, b) => a - b);

  positionArryTree.forEach((val, i) =>
    sortedArr.splice(positionArryTree[i], 0, -1)
  );
  return sortedArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];

// console.log(sortByHeight(a));

// Even and Odd sums

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

console.log(evenOddSums([1, 2, 3, 4, 5, 6, 7, 8]));

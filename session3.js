// LONGEST WORD
// Return the longest word of a string

function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //  sort  by length
  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });
  //  if multple word ,put into array
  const longwordArr = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });
  //   check if more than one value
  if (longwordArr.length === 1) {
    return longwordArr[0];
  } else {
    return longwordArr;
  }
}
// console.log(longestWord('this is programming'));

// CHALLENGE 2: ARRAY CHUNKING

const chunkArray = (arr, len) => {
  // init a chunked arr
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i = i + len;
  }
  return chunkedArr;
};
// console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));

// OPPOSITE OF WHAT WE DID
const flattenedArray = (arrays) => {
  return arrays.reduce((a, b) => {
    return a.concat(b);
  });
};

// console.log(
//   flattenedArray([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );
// ANAGRAM

const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};
// helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}

// console.log(isAnagram('elbow', 'belows'));

// Letter changing

const letterChanging = (str) => {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase();
  });
  return newStr;
};

console.log(letterChanging('hello there'));

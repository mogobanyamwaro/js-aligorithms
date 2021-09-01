// Reverse a string

const reverseString = (str) => {
  // clean it up
  const strArry = str.split('');
  strArry.reverse();
  return strArry.join('');
};

// console.log(reverseString('hello'));

// A Palindrome

const isPalindrome = (str) => {
  const revString = str.split('').reverse().join('');
  return revString === str;
};

// console.log(isPalindrome('omo'));

const reverseInt = (int) => {
  const revString = int.toString().split('').join('');
  return parseInt(revString) * Math.sign();
};

// Capitalize Letters

const capitalizeLetter = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
};

// console.log(capitalizeLetter('i love programming'));

// Max Chars

const maxCharacters = (str) => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
  str.split('').forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};

// console.log(maxCharacters('javascript'));

// FizzBuzz

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz());

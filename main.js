// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
};
console.log(reverseString('hello'));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let reverse = reverseString(str);
  for(let i = 0; i < str.length; i++){
    if(str[i] !== reverse[i]){
      return false;
    }
  }
  return true; 
}
console.log(isPalindrome('racecar'));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let stInt = String(int);
  let newNum = '';
  if(int < 0){
    newNum += '-';
  }
  for(let i = stInt.length - 1; i >= 0; i--){
    newNum += stInt[i];
  }
  return parseInt(newNum);
}
console.log(reverseInt(-521));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  newStr = '';
  for(let i = 0; i < str.length; i++){
    if(i === 0){
      newStr += str[i].toUpperCase();
    } else if (str[i - 1] === ' ') {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }  
  return newStr;
}
console.log(capitalizeLetters('i love javascript'));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let characters = {};
  let charEntries = [];
  for(let i = 0; i < str.length; i++){
    let letter = str[i];
    if(characters[letter] === undefined){
      characters[letter] = 1;
    } else {
      characters[letter] += 1;
    }
  }

  charEntries = Object.entries(characters);
  charEntries.sort((a, b) => b[1] - a[1]);
  let mostCommonChar = charEntries.slice(0, 1);
  return mostCommonChar[0][0];
};

console.log(maxCharacter('javascript'));


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 1; i < 101; i++){
    if(i % 5 === 0 && i % 3 === 0){
      console.log('FizzBuzz');
    } else if (i % 3 === 0){
      console.log('Fizz');
    } else if (i % 5 === 0){
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }  
  return 'I printed to the console.'  
}
console.log(fizzBuzz());


////// Find Answers Here //////
// https://github.com/mahamahmood/challenges/blob/master/javascript-challenges/part_1/main.js

//1. Write a JavaScript function to calculate the sum of two numbers.

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 4));

// 2. Write a JavaScript program to find the maximum number in an array.

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [3, 5, 6, 7, 3, 10];
const maxNumber = findMaxNumber(numbers);
console.log("The maximum no is ", maxNumber);

// or

// function findMaxNumber(arr){
// return Math.max(...arr)
// }

// const arr=[2,3,4,2,12]
// console.log(findMaxNumber(arr))

//3.  Write a JavaScript program to reverse a given string

function reverseString(str) {
  let data = "";
  for (let i = str.length - 1; i >= 0; i--) {
    data += str[i];
  }
  return data;
}
console.log(reverseString("hi there how are you"));

// 4.. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalinDrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalinDrome("tht"));

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const array = [2, 3, 2, 6, 7, 8, 10, 12];
let data = array.filter((num) => num % 2 === 0);
console.log(data);

//6. Write a JavaScript program to calculate the factorial of a given number.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(6), "from factorial");

//7. Write a JavaScript function to check if a given number is prime.

let num = 6;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break; // Exit the loop if we find a divisor
  }
}

if (isPrime) {
  console.log(`${num} is prime`);
} else {
  console.log(`${num} is not a prime number`);
}

//8.Write a function that determines if two strings are anagrams of each other

function areAnargrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnargrams("the", "the"), "from anagrams");

// 9. Given an array of numbers, write a function to find the largest and smallest numbers in the array.

function findLargestAndSmallest(arr) {
  let larget = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > larget) {
      larget = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { larget, smallest };
}

let number = [34, 12, 98, 56, 3, 72];
console.log(findLargestAndSmallest(number), "from largest no and smallest no");

// 10.Write a function that takes an array of integers as input and returns a new array with only the unique elements.

function removeDuplicates(arr) {
  // Use a Set to automatically remove duplicates
  const uniqueElements = [...new Set(arr)];
  return uniqueElements;
}

// Example usage
const numbersData = [1, 2, 3, 4, 2, 5, 6, 3];
const uniqueArray = removeDuplicates(numbersData);
console.log("Array with unique elements:", uniqueArray);

// 11.Implement a function to remove duplicates from an array.

function removeDuplicates(arr) {
  const uniqueArray = [];

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the element is already in uniqueArray
    if (!uniqueArray.includes(arr[i])) {
      // If not, add it to uniqueArray
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example usage
const numbersdata = [1, 2, 2, 3, 4, 4, 5];
const uniqueArraydata = removeDuplicates(numbersdata);
console.log("Array with unique elements:", uniqueArraydata);

// 12 Implement a function that finds the second smallest element in an array of integers.

function secondSmallest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[1];
}

console.log(secondSmallest([10, 12, 9]));

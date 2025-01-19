// console.log('hi')
// find the largest element in an array using a for loop in JavaScript

let arr = [12, 45, 67, 23, 89, 34, 56];

let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("The largest element is:", largest);

// find a element form an array

let target = 34;
found = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) found = true;
}

if (!found) {
  console.log("data not found");
} else {
  console.log(`data found`);
}

// Function to check if a number is prime 1 to 100

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// let str = "Hello, World!";
// let reversedStr = "";

// // Loop through the string from the end to the beginning
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i]; // Append each character to the reversed string
// }

// console.log(reversedStr);

let str = "hello world";
let reverseString = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverseString += str[i];
}
console.log(reverseString);

const data = (str) => {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
};
console.log(data("data"));

let array = ["sukhdeb", "rohit", "kumar"];
let useData = array.filter((user) => user !== "sukhdeb");
console.log(useData);

const arr = [3, 4, 2, 1, 3, 4, 5, 6, 64];
const sort = arr.sort((a, b) => a - b);
console.log(sort);

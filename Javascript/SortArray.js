let numbers = [2, 1, 3, 4, 7, 8, 4];
numbers.sort((a, b) => a - b); // Assending order With sort method
console.log(numbers);

numbers.sort((a, b) => b - a); // sorting in desending order
console.log(numbers);

let fruits = ["banana", "apple", "orange", "mango"];
fruits.sort(); //Default lexicographical sorting
console.log(fruits);

let people = [
  { name: "jhon", age: 30 },
  { name: "sukhdeb", age: 28 },
  { name: "Beena", age: 28 },
  { name: "Ruma", age: 24 },
];

const SortedData = people.sort((a, b) => a.age - b.age); // sorted by age
console.log(SortedData);


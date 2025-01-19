// linier search

let data = [1, 2, 3, 4, 5, 6, 7];
let item = 6;
let index = undefined;
for (i = 0; i <= data.length - 1; i++) {
  //   console.log(data[i]);
  if (data[i] === item) {
    index = i;
    break;
  }
}

console.log(index);

console.log(data.indexOf(item)); // default fucntion

// delete array item

data.splice(2, 1); // here deleting 2 index no and 1 means only one data is delting
console.log(data);

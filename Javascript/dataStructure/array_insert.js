let data = [60, 30, 10, 67, 40];
let newEl = 70;
let position = 2;

for (let i = data.length - 1; i >= 0; i--) {
  console.log(data[i]);
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newEl;
    }
  }
}
console.log(data);

// with array in-built method

// items.splice(2, 0, 2000);
// first 2 is where you want to insert
// 0 if you want to delete index 'here i'm not deletinf anything'
// 2000 and this 2000 what you want to insert
let items = [20, 40, 50, 6, 2, 9];

items.splice(2, 0, 2000);
console.log(items);

const user = [1, 2, 3, 4, 5];
user.splice(1, 0, 1000);
console.log(user);

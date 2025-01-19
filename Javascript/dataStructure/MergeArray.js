let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [];

for (i = 0; i < a.length; i++) {
  console.log(a[i]);
  c[i] = a[i];
}
// console.log(c)
for (i = 0; i < b.length; i++) {
  c[a.length + i] = b[i];
}

console.log(c);

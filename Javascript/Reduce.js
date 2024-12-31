const myNums = [1, 2, 3, 4, 5, 6];

let Total = myNums.reduce((acc, curval) => {
  //   console.log(`acc:${acc} and CurVal: ${curval}`);
  return acc + curval;
}, 0);

console.log(Total);

let shopingcart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "python",
    price: 999,
  },
  {
    itemName: "Mobile",
    price: 5999,
  },
  {
    itemName: "data Science",
    price: 12999,
  },
];

const TotalDat = shopingcart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(TotalDat);

const add = [1, 4, 5, 3, 5, 67, 75];
let TotalData = add.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log(TotalData);

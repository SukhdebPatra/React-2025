let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = myNums.map((num) => {
  return num + 10;
});

// console.log(result);

//chaning

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num >= 40);

console.log(newNums);

const Numbers=[10,20,30,40]
let resultData=Numbers.map((num)=>{
  return num+2
})

console.log(resultData)

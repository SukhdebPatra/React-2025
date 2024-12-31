// // const x = [1, 2, 3, 4, 5];

// // const y = x.filter(el => el%2 === 0);

// // console.log("y is: ", y); // y is: [2, 4]

// // const Data=[1,2,5,6,4,5,3,5]

// // const result=Data.filter(ele=>ele>=5)
// // console.log(result)

// const emp = [
//   {
//     name: "Ram",
//     empID: 101,
//     address: "Bandhpara",
//     pin: 833201,
//     city: "Chaibasa",
//   },
//   {
//     name: "Sham",
//     empID: 102,
//     address: "tungri",
//     pin: 833205,
//     city: "tata",
//   },
//   {
//     name: "Mohan",
//     empID: 103,
//     address: "nimdih",
//     pin: 833203,
//     city: "delhi",
//   },
// ];

// const result = emp.filter((ele) => {
//   return ele.name == "Mohan";
// });
// // console.log(result);

// const Data = emp.filter((data) => {
//   return data.city === "Chaibasa" || data.address === "nimdih";
// });

// console.log(Data);

// const city=emp.filter((city)=>{
// return city.city==='delhi'
// })

//find a no which is greater the 20

let num = [12, 20, 23, 43, 5, 6, 77, 84];

let myNums = num.filter((num) => {
  return num > 20;
});

console.log(myNums);

let number = [12, 2, 0, 3, 5, 6, 3];
let myNumbers = number.filter((num) => num > 3);
console.log(myNumbers);

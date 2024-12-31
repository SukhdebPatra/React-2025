// let Data = "hello";

// let reverse = "";

// for (var i = Data.length - 1; i >=0; i--) {
//   reverse += Data[i];
// }

// console.log(reverse)

function reverseString(str) {
  let data = "";
  for (let i = str.length - 1; i >= 0; i--) {
    data += str[i];
  }
  return data;
}

const result=reverseString('hi')
console.log(result)

// const mail='i am sukhdeb'

// const array=mail.split('').reverse().join('')
// console.log(array)

// let data = "hello";
// var reverse = "";

// for (var i = data.length - 1; i >= 0; i--) {
//   reverse += data[i];
// }

// console.log(reverse);

// let data = "string data";

// let flag = "";
// for (var i = data.length - 1; i >= 0; i--) {
//   flag += data[i];
// }

// console.log(flag);

// var result = data.split("").reverse().join('')
// console.log(result)

// function reverseString(str) {
//   let data = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     data += str[i];
//   }
//   return data;
// }

// function dataReverse(str){
// let noData=""
// for(let s=str.length-1;s>=0;s--){
//    noData +=str[s]
// }
// return noData
// }

// const newResult=dataReverse('helllooo')
// console.log(newResult)

// function dataReverse(str){
//   let reverse=""
//   for(var i=str.length-1;i>=0;i--){
//     reverse +=str[i]
//   }
//   return reverse
// }

// const result =dataReverse('from a data')
// console.log(result)

// function dataReverse (str){
// let noData=""
// for(let i=str.length-1;i>0;i--){
//   noData +=str[i]
// }
// return noData
// }

// const result=dataReverse('from a data')
// console.log(result)

// let data = 'hello how are you'
//  let reverseData=data.split('').reverse().join('')
//  console.log(reverseData)

// function ReverseString(str) {
//   let string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     string += str[i];
//   }
//   return string;
// }

// const value = ReverseString("the data");
// console.log(value);

function reverse (str){
  let strring=''
  for(let i=str.length-1;i>=0;i--){
    strring +=str[i]
  }
  return strring 
}
let Result=reverse('from reverse')
console.log(Result)
// let array = [1, 2, 3, 3];

// let maping = array.map((num) => num + 10);
// console.log(maping);

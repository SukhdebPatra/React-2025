// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap element
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let numbers = [5, 2, 1, 3, 7];
// console.log(bubbleSort(numbers));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    // console.log(i);
  }
  return arr;
}
let num = [2, 1, 34, 32, 4, 5, 9, 6];
console.log(bubbleSort(num));

// // >  greater then sign
// //< less then sign

// function bubbleSortDescending(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         // changed here greter then to less then
//         // Swap elements
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let numbersRevers = [5, 2, 9, 1, 5, 6];
// console.log(bubbleSortDescending(numbersRevers)); // Output: [9, 6, 5, 5, 2, 1]

// function sortBubble(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// let arr = [8, 20, -2, 4, -6];
// console.log(sortBubble(arr));

let counter = 0;
// debugger
for (var i = 1; i <= 10; i++) {
  counter+= i;
  console.log(counter)
}
console.log(counter);
console.log(i);

